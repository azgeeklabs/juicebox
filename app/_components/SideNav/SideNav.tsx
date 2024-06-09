"use client";
import classNames from "classnames";
import styles from "./SideNav.module.css";
import image from "@/public/assets/image.png";
import { useState } from "react";
import Link from "next/link";

const navBarItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: (
      <svg
        width="11"
        height="11"
        viewBox="0 0 11 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.84981 -0.000488281H1.09995C0.492463 -0.000488281 0 0.491975 0 1.09946V4.94927C0 5.55676 0.492463 6.04922 1.09995 6.04922H3.84981C4.4573 6.04922 4.94976 5.55676 4.94976 4.94927V1.09946C4.94976 0.491975 4.4573 -0.000488281 3.84981 -0.000488281Z"
          fill="#F8F24B"
        />
        <path
          d="M9.89986 -0.000488281H7.15C6.54251 -0.000488281 6.05005 0.491975 6.05005 1.09946V2.74938C6.05005 3.35686 6.54251 3.84933 7.15 3.84933H9.89986C10.5073 3.84933 10.9998 3.35686 10.9998 2.74938V1.09946C10.9998 0.491975 10.5073 -0.000488281 9.89986 -0.000488281Z"
          fill="#F8F24B"
        />
        <path
          d="M3.84981 6.87402H1.09995C0.492463 6.87402 0 7.36649 0 7.97397V9.62389C0 10.2314 0.492463 10.7238 1.09995 10.7238H3.84981C4.4573 10.7238 4.94976 10.2314 4.94976 9.62389V7.97397C4.94976 7.36649 4.4573 6.87402 3.84981 6.87402Z"
          fill="#F8F24B"
        />
        <path
          d="M9.89986 4.94922H7.15C6.54251 4.94922 6.05005 5.44168 6.05005 6.04917V9.89898C6.05005 10.5065 6.54251 10.9989 7.15 10.9989H9.89986C10.5073 10.9989 10.9998 10.5065 10.9998 9.89898V6.04917C10.9998 5.44168 10.5073 4.94922 9.89986 4.94922Z"
          fill="#F8F24B"
        />
      </svg>
    ),
    link: "/dashboard",
    active: true,
  },
  {
    id: 2,
    title: "Services",
    icon: (
      <svg
        width="17"
        height="11"
        viewBox="0 0 17 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.0106 5.16275C14.0342 5.02756 14.049 4.889 14.049 4.74741C14.049 3.42387 12.9765 2.35114 11.6539 2.35114C11.3658 2.35114 11.0898 2.40474 10.8331 2.49846C10.0534 1.28887 8.69779 0.48584 7.15217 0.48584C4.73283 0.48584 2.77174 2.4479 2.77174 4.86844C2.77174 4.98205 2.78016 5.09364 2.78892 5.20523C1.618 5.4992 0.75 6.55608 0.75 7.81827C0.75 9.30768 1.95698 10.5153 3.44565 10.5153H13.5543C15.043 10.5153 16.25 9.30768 16.25 7.81827C16.25 6.48495 15.2816 5.38019 14.0106 5.16275Z"
          fill="#F8F24B"
        />
      </svg>
    ),
    link: "/services",
    active: true,
  },
  {
    id: 3,
    title: "White Label",
    icon: (
      <svg
        width="11"
        height="11"
        viewBox="0 0 11 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.8194 0.891066C10.8014 0.506588 10.4937 0.198924 10.1093 0.180951L6.2646 0.00111034C6.05504 -0.00903203 5.85081 0.0702798 5.7024 0.218724L0.218434 5.70272C0.0786034 5.84259 0 6.03224 0 6.23005C0 6.42786 0.0785661 6.61755 0.218434 6.75742L4.24291 10.7818C4.38848 10.9275 4.57936 11.0002 4.77024 11.0002C4.96108 11.0002 5.15196 10.9274 5.2976 10.7818L10.7815 5.29792C10.9299 5.14952 11.009 4.9454 10.9992 4.73573L10.8194 0.891066ZM9.41455 2.83739C9.06893 3.18302 8.50852 3.18302 8.1629 2.83739C7.81728 2.49177 7.81728 1.93137 8.1629 1.58574C8.50852 1.24012 9.06893 1.24012 9.41455 1.58574C9.76017 1.93137 9.76021 2.49173 9.41455 2.83739Z"
          fill="#F8F24B"
        />
      </svg>
    ),
    link: "/white-label",
    active: false,
  },
  {
    id: 4,
    title: "Infinity",
    icon: (
      <svg
        width="11"
        height="11"
        viewBox="0 0 11 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.9798 5.1615C10.8066 2.29213 8.43446 0.0176441 5.52796 -0.000244141H5.46288C4.4363 0.007095 3.47571 0.293298 2.65582 0.790482C1.89872 1.24822 1.26123 1.88392 0.800641 2.64025C0.348304 3.38098 0.0687441 4.23959 0.0105407 5.15829C0.00366568 5.27157 0 5.38486 0 5.5009C0 5.61557 0.00458331 5.73023 0.0114574 5.84306C0.0678278 6.76175 0.347846 7.61945 0.8011 8.3611C1.25939 9.11696 1.89368 9.75083 2.64528 10.2109C3.46929 10.7035 4.43126 10.9929 5.45463 10.9998H5.53712C8.44409 10.98 10.8066 8.71105 10.9862 5.84444C10.9927 5.73436 11 5.61694 11 5.50732C11 5.39771 11 5.28029 10.9927 5.17067L10.9803 5.16058L10.9798 5.1615ZM5.50046 7.17042V8.92708C5.54445 10.0003 5.23923 10.1792 4.87259 10.1957C4.85701 10.1957 4.84235 10.1971 4.82676 10.1976C2.73877 9.90173 1.08799 8.24505 0.8011 6.15082C0.770853 5.938 0.75527 5.7206 0.75527 5.49953C0.75527 5.27937 0.770853 5.06243 0.8011 4.84915C1.08753 2.75767 2.73419 1.10191 4.82035 0.803784L4.87305 0.808371C5.23969 0.828095 5.54445 1.00559 5.50092 2.0761V3.83185C5.49633 4.55332 5.91109 5.24084 6.35197 5.50136C5.91109 5.75821 5.49587 6.36135 5.50046 7.16813L5.50046 7.17042Z"
          fill="#F8F24B"
        />
      </svg>
    ),
    link: "/infinity",
    active: false,
  },
  {
    id: 5,
    title: "Settings",
    icon: (
      <svg
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.12344 0.0982236C6.88957 -0.000732393 6.59304 -0.000732422 5.99999 -0.000732422C5.40694 -0.000732422 5.11041 -0.000732393 4.87654 0.0982236C4.56467 0.230167 4.31689 0.483245 4.18772 0.801777C4.12875 0.947189 4.10567 1.11629 4.09664 1.36296C4.08337 1.72546 3.90136 2.061 3.59379 2.24237C3.28621 2.42374 2.91072 2.41697 2.59673 2.24746C2.38306 2.13211 2.22814 2.06797 2.07536 2.04743C1.74069 2.00242 1.40222 2.09506 1.13441 2.30495C0.93356 2.46236 0.785297 2.72465 0.488777 3.24922C0.192257 3.7738 0.0440006 4.03608 0.0109564 4.29246C-0.0331088 4.63429 0.0575858 4.98 0.263083 5.25354C0.356878 5.37841 0.488695 5.48332 0.693282 5.61462C0.994046 5.80767 1.18757 6.1365 1.18755 6.49927C1.18753 6.86203 0.994015 7.1908 0.693282 7.38379C0.488663 7.51515 0.356821 7.62013 0.263019 7.74499C0.0575227 8.01851 -0.0331656 8.36418 0.0108934 8.70602C0.0439375 8.96238 0.1922 9.22472 0.488714 9.74927C0.785233 10.2738 0.933497 10.5362 1.13435 10.6935C1.40215 10.9034 1.74062 10.996 2.0753 10.9511C2.22807 10.9305 2.38298 10.8664 2.59663 10.751C2.91064 10.5815 3.28616 10.5748 3.59375 10.7561C3.90135 10.9375 4.08336 11.2731 4.09664 11.6356C4.10567 11.8822 4.12875 12.0514 4.18772 12.1968C4.31689 12.5153 4.56467 12.7684 4.87654 12.9003C5.11041 12.9993 5.40694 12.9993 5.99999 12.9993C6.59304 12.9993 6.88957 12.9993 7.12344 12.9003C7.43532 12.7684 7.68309 12.5153 7.81224 12.1968C7.87123 12.0514 7.89435 11.8822 7.90338 11.6356C7.91664 11.2731 8.0986 10.9375 8.40618 10.7561C8.71376 10.5747 9.08929 10.5815 9.40332 10.751C9.61698 10.8664 9.77184 10.9304 9.92462 10.951C10.2593 10.996 10.5978 10.9034 10.8655 10.6935C11.0665 10.5361 11.2147 10.2738 11.5112 9.7492C11.8077 9.22465 11.956 8.96238 11.9891 8.70602C12.0331 8.36418 11.9424 8.01845 11.7369 7.74493C11.6431 7.62006 11.5113 7.51509 11.3066 7.38379C11.0059 7.1908 10.8124 6.86197 10.8124 6.4992C10.8124 6.13644 11.0059 5.80773 11.3066 5.61475C11.5113 5.48338 11.6431 5.37847 11.737 5.25354C11.9424 4.98004 12.0331 4.63433 11.9891 4.2925C11.956 4.03612 11.8078 3.77384 11.5113 3.24927C11.2147 2.7247 11.0665 2.46241 10.8656 2.30499C10.5978 2.0951 10.2594 2.00247 9.92468 2.04748C9.7719 2.06802 9.61698 2.13215 9.40338 2.24749C9.08936 2.417 8.71382 2.42378 8.40624 2.24239C8.09866 2.06101 7.91664 1.72545 7.90332 1.36293C7.89429 1.11628 7.87123 0.947182 7.81224 0.801777C7.68309 0.483245 7.43532 0.230167 7.12344 0.0982236ZM5.99999 8.44927C7.05441 8.44927 7.90913 7.57625 7.90913 6.49927C7.90913 5.42228 7.05441 4.54927 5.99999 4.54927C4.94557 4.54927 4.09083 5.42228 4.09083 6.49927C4.09083 7.57625 4.94557 8.44927 5.99999 8.44927Z"
          fill="#F8F24B"
        />
      </svg>
    ),
    link: "/settings",
    active: false,
  },
];

interface NavbarItemsProps {
  icon: JSX.Element;
  title: string;
  link: string;
  active: boolean;
}

function NavbarItems({ icon, link, active, title }: NavbarItemsProps) {
  return (
    <li
      className={classNames("w-fit", styles.nav_item, active && styles.active)}
    >
      <Link href={link} className="flex items-center">
        {icon}
        <span className={classNames("", styles.navbar_item_title)}>
          {title}
        </span>
      </Link>
    </li>
  );
}

function SideNav({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  return (
    <div
      className={classNames(
        "flex flex-col items-center gap-4 h-[100%] relative px-1",
        styles.sidebar,
        open && styles.open
      )}
    >
      <div
        className={classNames(
          "flex items-center justify-center px-1",
          styles.logo
        )}
      >
        <img src={image.src} className="shrink-0" alt="logo" />
        <svg
          width="101"
          height="62"
          viewBox="0 0 101 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_65_275)">
            <path
              d="M4.80373 23.4323C3.42311 23.0809 2.28613 22.5944 1.36572 21.9999V16.7566H7.32132V17.0539C7.32132 18.135 7.83567 18.6485 8.86436 18.6485C9.40578 18.6485 9.81184 18.5134 10.0826 18.2161C10.3533 17.9188 10.4886 17.4863 10.4886 16.8647V5.29716H7.8086V0.405273H20.3154V5.27014H18.8265V15.2701C18.8265 18.189 17.9602 20.3512 16.2547 21.7836C14.5493 23.2161 12.167 23.9458 9.13507 23.9458C7.6191 23.9458 6.15727 23.7836 4.77666 23.4323H4.80373Z"
              fill="#F8F24B"
            />
            <path
              d="M25.3778 21.9188C23.6723 20.5404 22.8331 18.3242 22.8331 15.2701V5.29716H21.3442V0.405273H32.3621V5.27013H31.171V16.7566C31.171 17.4053 31.3063 17.8917 31.6041 18.189C31.9019 18.4863 32.335 18.6485 32.9035 18.6485C33.472 18.6485 33.9051 18.4863 34.2029 18.189C34.5007 17.8917 34.6361 17.4053 34.6361 16.7566V5.29716H33.4449V0.405273H43.6507V5.27013H42.1618V15.2161C42.1618 18.2972 41.3496 20.5134 39.6983 21.8647C38.047 23.2431 35.6918 23.9188 32.6057 23.9188C29.5197 23.9188 27.0833 23.2431 25.3778 21.8647V21.9188Z"
              fill="#F8F24B"
            />
            <path
              d="M44.7065 23.5404V18.6755H46.1954V5.29716H44.7065V0.405273H56.0222V5.27014H54.5333V18.6485H56.0222V23.5134H44.7065V23.5404Z"
              fill="#F8F24B"
            />
            <path
              d="M60.082 21.1081C58.0516 19.2162 57.0229 16.1622 57.0229 11.973C57.0229 3.97297 60.9212 0 68.6905 0C70.5855 0 72.318 0.216216 73.9423 0.675675C75.5665 1.13513 76.7576 1.64865 77.5698 2.18919V9.62162H70.423V7.48648C70.423 6.72973 70.2606 6.18919 69.9087 5.81081C69.5838 5.45946 69.0695 5.27027 68.3927 5.27027C67.716 5.27027 67.2016 5.45946 66.8768 5.81081C66.5519 6.16216 66.3624 6.72973 66.3624 7.48648V16.4594C66.3624 17.2162 66.5248 17.7567 66.8768 18.1351C67.2287 18.5135 67.716 18.6757 68.3927 18.6757C69.0695 18.6757 69.5838 18.4865 69.9087 18.1351C70.2335 17.7838 70.423 17.2162 70.423 16.4594V14.054H77.5698V21.7567C76.7576 22.3243 75.5394 22.8108 73.9423 23.2703C72.3451 23.7297 70.6125 23.9459 68.7447 23.9459C64.9818 23.9459 62.1123 23 60.0549 21.0811L60.082 21.1081Z"
              fill="#F8F24B"
            />
            <path
              d="M78.708 23.5404V18.6755H80.1969V5.29716H78.708V0.405273H98.7946V9.37824H92.1352V5.27014H88.5347V9.97283H91.1606V13.3512H88.5347V18.6485H92.1352V13.9458H98.7946V23.5134H78.708V23.5404Z"
              fill="#F8F24B"
            />
            <path
              d="M0.310059 54.2974H2.47573V34.8379H0.310059V27.7568H20.1801C23.7805 27.7568 26.5959 28.4866 28.6262 29.973C30.6565 31.4325 31.6582 33.5406 31.6582 36.2974C31.6582 38.0001 31.2521 39.4325 30.44 40.5947C29.6279 41.7568 28.6804 42.6487 27.5975 43.2433C26.5147 43.8379 25.4589 44.2433 24.4573 44.4325V44.8649C26.5147 45.0541 28.3555 45.7028 30.0068 46.8109C31.6582 47.919 32.4703 49.8649 32.4703 52.7028C32.4703 55.7298 31.3333 57.946 29.0594 59.3514C26.7854 60.7568 23.8076 61.4595 20.1801 61.4595H0.310059V54.3784V54.2974ZM16.9316 41.919C17.7708 41.919 18.3934 41.7028 18.8266 41.2433C19.2326 40.7839 19.4492 40.1082 19.4492 39.1352V37.5676C19.4492 36.6217 19.2326 35.919 18.8266 35.4595C18.4205 35.0001 17.7708 34.7839 16.9316 34.7839H14.6035V41.8649H16.9316V41.919ZM17.2294 54.2974C18.0686 54.2974 18.6912 54.0811 19.1243 53.6217C19.5304 53.1622 19.747 52.4865 19.747 51.5136V49.6217C19.747 48.6757 19.5304 47.973 19.1243 47.5136C18.7183 47.0541 18.0686 46.8379 17.2294 46.8379H14.5764V54.2703H17.2294V54.2974Z"
              fill="#F8F24B"
            />
            <path
              d="M37.9385 57.8379C35.069 55.0812 33.6343 50.6488 33.6343 44.5677C33.6343 38.4866 35.069 34.0542 37.9385 31.2974C40.8081 28.5407 44.8958 27.1353 50.1746 27.1353C55.4534 27.1353 59.5411 28.5136 62.4106 31.2974C65.2802 34.0542 66.7149 38.4866 66.7149 44.5677C66.7149 50.6488 65.2802 55.0812 62.4106 57.8379C59.5411 60.5947 55.4534 62.0001 50.1746 62.0001C44.8958 62.0001 40.8081 60.6217 37.9385 57.8379ZM52.3944 53.5136C52.8817 53.0001 53.1253 52.1893 53.1253 51.0812V38.0271C53.1253 36.919 52.8817 36.1352 52.3944 35.5947C51.9071 35.0812 51.1762 34.8109 50.1746 34.8109C49.173 34.8109 48.4691 35.0812 47.9548 35.5947C47.4675 36.1082 47.2239 36.919 47.2239 38.0271V51.0812C47.2239 52.2163 47.4675 53.0271 47.9548 53.5136C48.4421 54.0271 49.173 54.2704 50.1746 54.2704C51.1762 54.2704 51.8801 54.0001 52.3944 53.4866V53.5136Z"
              fill="#F8F24B"
            />
            <path
              d="M98.4963 54.2974H100.31V61.3784H83.9321V54.2974H85.7188L83.2012 50.7568H82.7681L80.2505 54.2974H82.0372V61.3784H66.8774V54.2974H69.1243L77.4351 44.946L68.7724 34.8379H66.9587V27.7568H83.2012V34.8379H81.5499L83.9321 38.3784H84.3652L86.7475 34.8379H85.0962V27.7568H100.121V34.8379H97.8736L89.6982 44.0541L98.4963 54.2974Z"
              fill="#F8F24B"
            />
          </g>
          <defs>
            <clipPath id="clip0_65_275">
              <rect
                width="100"
                height="62"
                fill="white"
                transform="translate(0.310059)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div
        className={classNames(
          "flex flex-col h-full grow justify-between w-max w-min-12  px-1 group",
          styles.navbar
        )}
      >
        <header className="flex flex-col relative">
          <nav>
            <ul className="flex flex-col items-center justify-center mt-7 gap-4">
              {navBarItems.map((item) => (
                <div
                  className="relative flex justify-center w-full"
                  key={item.id}
                >
                  <NavbarItems
                    key={item.id}
                    title={item.title}
                    icon={item.icon}
                    link={item.link}
                    active={item.active}
                  />
                </div>
              ))}
            </ul>
          </nav>
        </header>
        <footer className="mb-12">
          <div
            className={classNames(
              "flex items-center cursor-pointer",
              styles.footer
            )}
            onClick={() => setOpen(!open)}
          >
            <svg
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <path
                d="M18.5003 28.3946C17.6374 28.3946 16.9378 27.6951 16.9378 26.8321C16.9378 25.9692 17.6374 25.2696 18.5003 25.2696L23.7087 25.2696C23.9963 25.2696 24.2295 25.0364 24.2295 24.7488L24.2295 12.2488C24.2295 11.9612 23.9963 11.728 23.7087 11.728L19.0212 11.728C18.1582 11.728 17.4587 11.0284 17.4587 10.1655C17.4587 9.30255 18.1582 8.60297 19.0212 8.60297L23.7087 8.60297C25.7222 8.60297 27.3545 10.2353 27.3545 12.2488L27.3545 24.7488C27.3545 26.7623 25.7222 28.3946 23.7087 28.3946L18.5003 28.3946ZM12.1872 22.5499L9.24095 19.6037C8.63075 18.9935 8.63075 18.0041 9.24095 17.3939L12.1872 14.4477C12.7974 13.8374 13.7867 13.8374 14.3969 14.4477C15.0071 15.0579 15.0071 16.0471 14.3969 16.6573L14.118 16.9363L18.5003 16.9363C19.3632 16.9363 20.0628 17.6359 20.0628 18.4988C20.0628 19.3617 19.3632 20.0613 18.5003 20.0613L14.118 20.0613L14.3969 20.3403C15.0071 20.9504 15.0071 21.9397 14.3969 22.5499C13.7867 23.1601 12.7974 23.1601 12.1872 22.5499Z"
                fill="#F8F24B"
              />
            </svg>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default SideNav;
