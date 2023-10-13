"use client";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import ChartJsImage from "chartjs-to-image";
import { useEffect, useState } from "react";
import Document from "@/components/Document";
import { isMobile, isBrowser } from "react-device-detect";

export default function Home() {
  const [imageSrc, setImageSrc] = useState(null);
  const [allBurglaryArrests, setAllBurglaryArrests] = useState([]);
  const [pdfPreview, setPdfPreview] = useState(false);

  useEffect(() => {
    if (allBurglaryArrests.length) {
      const myChart = new ChartJsImage();
      myChart.setConfig({
        type: "line",
        data: {
          labels: [2016, 2017, 2018, 2019, 2020, 2021, 2022],
          datasets: [
            {
              fill: false,
              data: allBurglaryArrests,
              pointRadius: 0,
              borderColor: "#1463FF",
              borderWidth: 2,
              backgroundColor: "#1463FF80",
            },
          ],
        },
        options: {
          layout: {
            padding: 15,
          },
          legend: {
            display: false,
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
                ticks: {
                  fontColor: "#626E99",
                  fontSize: 9,
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  color: "#BAC2DB",
                  zeroLineColor: "#BAC2DB",
                  tickMarkLength: 0,
                },
                ticks: {
                  beginAtZero: true,
                  padding: 10,
                  fontColor: "#626E99",
                  fontSize: 9,
                },
              },
            ],
          },
        },
      });
      myChart.setDevicePixelRatio(2);
      myChart.toDataUrl().then((data) => setImageSrc(data));
    }
  }, [allBurglaryArrests]);

  useEffect(() => {
    if (pdfPreview) {
      fetch(
        "https://api.usa.gov/crime/fbi/cde/arrest/state/AK/all?from=2015&to=2022&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv"
      )
        .then((res) => res.json())
        .then((result) => {
          setAllBurglaryArrests(result.data.map((d) => d.Burglary));
        });
    }
  }, [pdfPreview]);

  return (
    <>
      {!imageSrc && (
        <div className="h-full w-full flex justify-center items-center">
          <button
            className="bg-black text-white px-6 py-2 rounded-2xl flex gap-2"
            onClick={() => setPdfPreview(true)}
          >
            {pdfPreview && !imageSrc ? (
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            ) : (
              <>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.75 7H7.25V5C7.25 3 8 2 10.25 2H13.75C16 2 16.75 3 16.75 5V7Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 15V19C8 21 9 22 11 22H13C15 22 16 21 16 19V15H8Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 10V15C3 17 4 18 6 18H8V15H16V18H18C20 18 21 17 21 15V10C21 8 20 7 18 7H6C4 7 3 8 3 10Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 15H8.21H17"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17 11H14"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Print
              </>
            )}
          </button>
        </div>
      )}
      {imageSrc && isBrowser && (
        <div style={{ height: "100vh" }}>
          <PDFViewer height={"100%"} width={"100%"}>
            <Document imageSrc={imageSrc} />
          </PDFViewer>
        </div>
      )}
      {imageSrc && isMobile && (
        <div className="h-full w-full flex justify-center items-center">
          <PDFDownloadLink
            document={<Document imageSrc={imageSrc} />}
            fileName="burglary-arrests.pdf"
          >
            {({ loading }) =>
              loading ? (
                "Preparing the download link..."
              ) : (
                <p className="text-blue-500 underline">
                  Click here to download pdf
                </p>
              )
            }
          </PDFDownloadLink>
        </div>
      )}
    </>
  );
}
