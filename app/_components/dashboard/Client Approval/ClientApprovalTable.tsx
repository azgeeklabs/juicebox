"use client";
import React from "react";
import styles from "./ClientApprovalTable.module.css";
import classNames from "classnames";

export default function ClientApprovalTable() {
  // An array of objects representing the rows of the table body.
  const bodyRow = [{}, {}, {}, {}];

  return (
    <div className={`${styles.tableContainer} w-full`}>
      {/* ===== Start Table ===== */}
      <div className={styles.table + " w-full"}>
        {/* Table Header */}
        <ul className={styles.table_header}>
          <li className={classNames("w-[33.33%]")}>
            <span>Task</span>
          </li>
          <li className={classNames(styles.center, "w-[33.33%]")}>
            <span>State</span>
          </li>
          <li className={classNames(styles.center, "w-[33.33%]")}>
            <span>Docs</span>
          </li>
        </ul>

        {/* Table Body */}
        <div className={styles.table_body}>
          {bodyRow.map((e, idx) => (
            <ul key={idx}>
              <li className="w-[33.33%]">
                <span>Sign Up Flow</span>
              </li>
              <li
                className={classNames(
                  styles.center,
                  "w-[33.33%]"
                )}
              >
                <span>
                  <svg
                    width="98"
                    height="20"
                    viewBox="0 0 98 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="98"
                      height="19.9473"
                      rx="9.97363"
                      fill="#717171"
                    />
                    <path
                      d="M23.5464 5.56163C24.0344 5.56163 24.4624 5.66563 24.8304 5.87363C25.2064 6.07363 25.4944 6.35763 25.6944 6.72563C25.9024 7.09363 26.0064 7.51763 26.0064 7.99763C26.0064 8.47763 25.9024 8.89763 25.6944 9.25763C25.4864 9.61763 25.1904 9.89763 24.8064 10.0976C24.4304 10.2976 23.9944 10.3976 23.4984 10.3976H21.3864C21.3544 10.3976 21.3384 10.4136 21.3384 10.4456V13.8536C21.3384 13.9336 21.2984 13.9736 21.2184 13.9736H20.3064C20.2264 13.9736 20.1864 13.9336 20.1864 13.8536V5.68163C20.1864 5.60163 20.2264 5.56163 20.3064 5.56163H23.5464ZM23.3904 9.46163C23.8304 9.46163 24.1824 9.32963 24.4464 9.06563C24.7184 8.80163 24.8544 8.45363 24.8544 8.02163C24.8544 7.58163 24.7184 7.22963 24.4464 6.96563C24.1824 6.69363 23.8304 6.55763 23.3904 6.55763H21.3864C21.3544 6.55763 21.3384 6.57363 21.3384 6.60563V9.41363C21.3384 9.44563 21.3544 9.46163 21.3864 9.46163H23.3904ZM31.9022 10.1576C31.9342 10.4856 31.9462 10.8536 31.9382 11.2616C31.9382 11.3416 31.8982 11.3816 31.8182 11.3816H27.9902C27.9582 11.3816 27.9422 11.3976 27.9422 11.4296C27.9422 11.7016 27.9662 11.9096 28.0142 12.0536C28.1022 12.3736 28.2782 12.6256 28.5422 12.8096C28.8142 12.9856 29.1542 13.0736 29.5622 13.0736C30.1542 13.0736 30.6102 12.8296 30.9302 12.3416C30.9702 12.2616 31.0222 12.2496 31.0862 12.3056L31.7702 12.7616C31.8262 12.8096 31.8382 12.8616 31.8062 12.9176C31.5822 13.2776 31.2622 13.5616 30.8462 13.7696C30.4382 13.9776 29.9742 14.0816 29.4542 14.0816C28.8702 14.0816 28.3782 13.9536 27.9782 13.6976C27.5782 13.4416 27.2782 13.0776 27.0782 12.6056C26.8862 12.1336 26.7902 11.5616 26.7902 10.8896C26.7902 10.3056 26.8342 9.86163 26.9222 9.55763C27.0662 9.00563 27.3542 8.56963 27.7862 8.24963C28.2182 7.92963 28.7422 7.76963 29.3582 7.76963C30.1662 7.76963 30.7702 7.97363 31.1702 8.38163C31.5702 8.78163 31.8142 9.37363 31.9022 10.1576ZM29.3582 8.76563C29.0142 8.76563 28.7302 8.85363 28.5062 9.02963C28.2822 9.19763 28.1302 9.42563 28.0502 9.71363C27.9942 9.88963 27.9582 10.1136 27.9422 10.3856C27.9422 10.4176 27.9582 10.4336 27.9902 10.4336H30.7382C30.7702 10.4336 30.7862 10.4176 30.7862 10.3856C30.7702 10.1216 30.7462 9.92563 30.7142 9.79763C30.6342 9.48563 30.4742 9.23763 30.2342 9.05363C30.0022 8.86163 29.7102 8.76563 29.3582 8.76563ZM36.1158 7.78163C36.7718 7.78163 37.2918 7.97363 37.6758 8.35763C38.0598 8.73363 38.2518 9.24563 38.2518 9.89363V13.8536C38.2518 13.9336 38.2118 13.9736 38.1318 13.9736H37.2198C37.1398 13.9736 37.0998 13.9336 37.0998 13.8536V10.1216C37.0998 9.72163 36.9838 9.39763 36.7518 9.14963C36.5198 8.90163 36.2118 8.77763 35.8278 8.77763C35.4518 8.77763 35.1438 8.90163 34.9038 9.14963C34.6638 9.39763 34.5438 9.71763 34.5438 10.1096V13.8536C34.5438 13.9336 34.5038 13.9736 34.4238 13.9736H33.5118C33.4318 13.9736 33.3918 13.9336 33.3918 13.8536V7.98563C33.3918 7.90563 33.4318 7.86563 33.5118 7.86563H34.4238C34.5038 7.86563 34.5438 7.90563 34.5438 7.98563V8.41763C34.5438 8.43363 34.5478 8.44563 34.5558 8.45363C34.5718 8.46163 34.5838 8.45763 34.5918 8.44163C34.9358 8.00163 35.4438 7.78163 36.1158 7.78163ZM43.6174 5.69363C43.6174 5.61363 43.6574 5.57363 43.7374 5.57363H44.6494C44.7294 5.57363 44.7694 5.61363 44.7694 5.69363V13.8536C44.7694 13.9336 44.7294 13.9736 44.6494 13.9736H43.7374C43.6574 13.9736 43.6174 13.9336 43.6174 13.8536V13.4576C43.6174 13.4416 43.6094 13.4296 43.5934 13.4216C43.5854 13.4136 43.5734 13.4176 43.5574 13.4336C43.3814 13.6336 43.1734 13.7896 42.9334 13.9016C42.6934 14.0136 42.4334 14.0696 42.1534 14.0696C41.5774 14.0696 41.0974 13.9296 40.7134 13.6496C40.3374 13.3616 40.0614 12.9576 39.8854 12.4376C39.7334 12.0136 39.6574 11.5016 39.6574 10.9016C39.6574 10.3416 39.7214 9.85763 39.8494 9.44963C40.0174 8.92163 40.2934 8.50963 40.6774 8.21363C41.0614 7.91763 41.5534 7.76963 42.1534 7.76963C42.4254 7.76963 42.6814 7.82563 42.9214 7.93763C43.1694 8.04163 43.3814 8.19363 43.5574 8.39363C43.5734 8.40963 43.5854 8.41363 43.5934 8.40563C43.6094 8.39763 43.6174 8.38563 43.6174 8.36963V5.69363ZM43.3174 12.4256C43.5014 12.0896 43.5934 11.5856 43.5934 10.9136C43.5934 10.2416 43.4934 9.72963 43.2934 9.37763C43.0614 8.96963 42.7214 8.76563 42.2734 8.76563C41.7934 8.76563 41.4374 8.95763 41.2054 9.34163C40.9494 9.74163 40.8214 10.2696 40.8214 10.9256C40.8214 11.5416 40.9214 12.0376 41.1214 12.4136C41.3534 12.8536 41.7334 13.0736 42.2614 13.0736C42.7254 13.0736 43.0774 12.8576 43.3174 12.4256ZM47.1542 6.90563C46.9302 6.90563 46.7462 6.83363 46.6022 6.68963C46.4582 6.54563 46.3862 6.36163 46.3862 6.13763C46.3862 5.91363 46.4582 5.72963 46.6022 5.58563C46.7462 5.44163 46.9302 5.36963 47.1542 5.36963C47.3782 5.36963 47.5622 5.44163 47.7062 5.58563C47.8502 5.72963 47.9222 5.91363 47.9222 6.13763C47.9222 6.36163 47.8502 6.54563 47.7062 6.68963C47.5622 6.83363 47.3782 6.90563 47.1542 6.90563ZM46.6742 13.9616C46.5942 13.9616 46.5542 13.9216 46.5542 13.8416V7.98563C46.5542 7.90563 46.5942 7.86563 46.6742 7.86563H47.5862C47.6662 7.86563 47.7062 7.90563 47.7062 7.98563V13.8416C47.7062 13.9216 47.6662 13.9616 47.5862 13.9616H46.6742ZM52.2408 7.78163C52.8968 7.78163 53.4168 7.97363 53.8008 8.35763C54.1848 8.73363 54.3768 9.24563 54.3768 9.89363V13.8536C54.3768 13.9336 54.3368 13.9736 54.2568 13.9736H53.3448C53.2648 13.9736 53.2248 13.9336 53.2248 13.8536V10.1216C53.2248 9.72163 53.1088 9.39763 52.8768 9.14963C52.6448 8.90163 52.3368 8.77763 51.9528 8.77763C51.5768 8.77763 51.2688 8.90163 51.0288 9.14963C50.7888 9.39763 50.6688 9.71763 50.6688 10.1096V13.8536C50.6688 13.9336 50.6288 13.9736 50.5488 13.9736H49.6368C49.5568 13.9736 49.5168 13.9336 49.5168 13.8536V7.98563C49.5168 7.90563 49.5568 7.86563 49.6368 7.86563H50.5488C50.6288 7.86563 50.6688 7.90563 50.6688 7.98563V8.41763C50.6688 8.43363 50.6728 8.44563 50.6808 8.45363C50.6968 8.46163 50.7088 8.45763 50.7168 8.44163C51.0608 8.00163 51.5688 7.78163 52.2408 7.78163ZM59.7767 7.98563C59.7767 7.90563 59.8167 7.86563 59.8967 7.86563H60.8087C60.8887 7.86563 60.9287 7.90563 60.9287 7.98563V13.6616C60.9287 14.6296 60.6527 15.3216 60.1007 15.7376C59.5567 16.1536 58.8247 16.3616 57.9047 16.3616C57.7767 16.3616 57.5767 16.3536 57.3047 16.3376C57.2247 16.3296 57.1847 16.2856 57.1847 16.2056L57.2207 15.3776C57.2207 15.3456 57.2327 15.3176 57.2567 15.2936C57.2807 15.2696 57.3127 15.2616 57.3527 15.2696C57.4647 15.2776 57.6287 15.2816 57.8447 15.2816C58.5247 15.2816 59.0167 15.1536 59.3207 14.8976C59.6247 14.6496 59.7767 14.2256 59.7767 13.6256V13.4096C59.7767 13.3936 59.7687 13.3816 59.7527 13.3736C59.7447 13.3656 59.7327 13.3696 59.7167 13.3856C59.3807 13.7776 58.8887 13.9736 58.2407 13.9736C57.7207 13.9736 57.2487 13.8376 56.8247 13.5656C56.4087 13.2936 56.1207 12.8936 55.9607 12.3656C55.8567 12.0136 55.8047 11.5256 55.8047 10.9016C55.8047 10.2376 55.8647 9.72563 55.9847 9.36563C56.1367 8.88563 56.4047 8.50163 56.7887 8.21363C57.1807 7.91763 57.6407 7.76963 58.1687 7.76963C58.8247 7.76963 59.3407 7.96963 59.7167 8.36963C59.7327 8.38563 59.7447 8.39363 59.7527 8.39363C59.7687 8.38563 59.7767 8.37363 59.7767 8.35763V7.98563ZM59.7047 12.0176C59.7287 11.8896 59.7447 11.7536 59.7527 11.6096C59.7687 11.4656 59.7767 11.2256 59.7767 10.8896C59.7767 10.5536 59.7687 10.3176 59.7527 10.1816C59.7447 10.0376 59.7247 9.90163 59.6927 9.77363C59.6287 9.47763 59.4847 9.23763 59.2607 9.05363C59.0367 8.86163 58.7567 8.76563 58.4207 8.76563C58.0847 8.76563 57.8047 8.86163 57.5807 9.05363C57.3567 9.23763 57.1967 9.47763 57.1007 9.77363C57.0127 10.0136 56.9687 10.3856 56.9687 10.8896C56.9687 11.4416 57.0087 11.8176 57.0887 12.0176C57.1687 12.3136 57.3247 12.5576 57.5567 12.7496C57.7967 12.9336 58.0847 13.0256 58.4207 13.0256C58.7727 13.0256 59.0567 12.9336 59.2727 12.7496C59.4967 12.5576 59.6407 12.3136 59.7047 12.0176Z"
                      fill="white"
                    />
                    <path
                      d="M77.7727 7.30469L71.2272 7.30469C70.4339 7.30469 69.9891 8.10971 70.4793 8.6585L73.752 12.3227C74.1324 12.7487 74.8666 12.7487 75.2479 12.3227L78.5207 8.65743C79.0108 8.10971 78.5661 7.30469 77.7727 7.30469Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </li>
              <li
                className={classNames(
                  styles.center,
                  "w-[33.33%]"
                )}
              >
                <a href="" className="flex items-center justify-between gap-[0.2vw]">
                  <span>Files</span>
                  <svg width="10" height="14" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.30481 3.82981L2.30481 10.3753C2.30481 11.1687 3.10983 11.6134 3.65862 11.1232L7.32287 7.8505C7.74887 7.47019 7.74887 6.73599 7.32287 6.35462L3.65755 3.08187C3.10983 2.5917 2.30481 3.03645 2.30481 3.82981Z" fill="white" />
                  </svg>

                </a>
              </li>
            </ul>
          ))}
        </div>
      </div>
      {/* ===== End Table ===== */}
    </div>
  );
}
