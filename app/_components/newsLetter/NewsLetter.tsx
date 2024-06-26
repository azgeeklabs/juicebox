"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

// Define the component props type
type Props = {};

// Define the form values type
interface FormValues {
  email: string;
}

// Define the API response type
interface ApiResponse {
  status: number;
  message: string;
}

// Define the validation schema using Yup
const requiredSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const SUBMITTING_MESSAGE = "Submitting...";
const SUBMIT_MESSAGE = "Sign up";
const SUCCESS_MESSAGE = "Thank you for subscribing to the newsletter.";
const ERROR_MESSAGE = "Error joining the newsletter.";

// Define and export the NewsLetter component
export default function NewsLetter({}: Props) {
  // State variables for managing form status and messages
  const [status, setStatus] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    // Disable the submit button to prevent multiple submissions
    setIsSubmitting(true);
    try {
      // Send a POST request to the API endpoint
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: values.email }),
      });

      // Parse the response from the API
      const data: ApiResponse = await response.json();

      // Handle error responses
      if (data.status >= 400) {
        setStatus(data.status);
        setMessage(ERROR_MESSAGE);
      } else {
        // Handle successful subscription
        setStatus(201);
        setMessage(SUCCESS_MESSAGE);
        resetForm();
      }
    } catch (error) {
      // Handle network or other errors
      setStatus(500);
      setMessage(ERROR_MESSAGE);
    } finally {
      // Re-enable the submit button
      setTimeout(
        () => {
          setMessage("");
          setIsSubmitting(false);
        },
        status === 201 ? 4000 : 2000
      );
    }
  };

  return (
    <div className="newsletter-container">
      {/* Formik component for form handling */}
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={requiredSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          // @ts-ignore
          <Form>
            <div className="newsletter-wrapper flex justify-between items-center gap-[--10px]">
              {/* Field component for email input */}
              <Field
                type="email"
                name="email"
                className="flex-grow rounded-[--10px] p-[--10px] text-[#1c1c1c] outline-none"
                autoComplete="off"
              />
              {/* Submit button */}
              <button
                className="bg-[#f8f24b] py-[--sy-9px] px-[--20px] rounded-[--33px] font-bold text-[--16px] font-[Barlow] text-[#1c1c1c] cursor-pointer"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? SUBMITTING_MESSAGE : SUBMIT_MESSAGE}
              </button>
            </div>
            {/* Message display for success or error */}
            {message && (
              <p
                className={`${
                  status !== 201 ? "text-red-500" : "text-green-500"
                } pt-[--16px] font-bold `}
              >
                {message}
              </p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}
