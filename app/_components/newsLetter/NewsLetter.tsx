"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Define the component props type
type Props = {};

// Define the validation schema using Yup
const requiredSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

// Define and export the NewsLetter component
export default function NewsLetter({}: Props) {
  // State variables for managing form status and messages
  const [status, setStatus] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);

  return (
    <>
      {/* Container for the form */}
      <div className="w-full p-5 md:p-6 space-y-5 bg-white shadow-md rounded-xl md:max-w-[600px]">
        {/* Header and description */}
        <div className="pb-2 space-y-3">
          <h1 className="text-2xl font-black sm:text-2.5xl">
            Subscribe to Newsletter!
          </h1>
          <p className="text-gray-600">
            Receive notifications of high-quality articles about frontend
            development and other relevant topics delivered straight to your
            inbox.
          </p>
        </div>

        {/* Formik component for form handling */}
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={requiredSchema}
          onSubmit={async (values, { resetForm }) => {
            // Disable the submit button to prevent multiple submissions
            setButtonDisabled(true);
            try {
              // Send a POST request to the API endpoint
              const response = await fetch("/api/newsletter", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: values?.email,
                }),
              });

              // Parse the response from the API
              const datas = await response.json();

              // Handle error responses
              if (datas.status >= 400) {
                setStatus(datas.status);
                setMessage("Error joining the newsletter.");
                setTimeout(() => {
                  setMessage("");
                  setButtonDisabled(false);
                }, 2000);
                return;
              }

              // Handle successful subscription
              setStatus(201);
              setMessage("Thank you for subscribing to the newsletter.");
              setTimeout(() => {
                setMessage("");
                resetForm();
                setButtonDisabled(false);
              }, 4000);
            } catch (error) {
              // Handle network or other errors
              setStatus(500);
              setMessage("Error joining the newsletter.");
              setTimeout(() => {
                setMessage("");
                setButtonDisabled(false);
              }, 2000);
            }
          }}
        >
          {/* Form component rendered by Formik */}
          <Form>
            <div className="flex items-center space-x-2">
              {/* Field component for email input */}
              <Field
                type="email"
                name="email"
                className="w-full px-5 py-3 bg-gray-100 rounded-md outline-none grow"
                placeholder="Enter your email"
                autoComplete="off"
              />
              {/* Submit button */}
              <button
                className="px-5 py-3 font-bold text-gray-100 transition-all bg-gray-800 rounded-md hover:bg-gray-900 hover:scale-105 disabled:opacity-80"
                type="submit"
                disabled={buttonDisabled}
              >
                {submitting ? "Submitting" : "Submit"}
              </button>
            </div>
            {/* Message display for success or error */}
            {message && (
              <p
                className={`${
                  status !== 201 ? "text-red-500" : "text-green-500"
                } pt-4 font-black `}
              >
                {message}
              </p>
            )}
          </Form>
        </Formik>
      </div>
    </>
  );
}
