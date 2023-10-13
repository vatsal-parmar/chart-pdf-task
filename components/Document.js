import {
  Document,
  Page,
  Image,
  View,
  Text,
  Svg,
  Defs,
  LinearGradient,
  Stop,
  Rect,
  Font,
} from "@react-pdf/renderer";
import LineChart from "./LineChart";

Font.register({
  family: "Poppins",
  fonts: [
    {
      src: "/fonts/Poppins/Poppins-Regular.ttf",
    },
    {
      src: "/fonts/Poppins/Poppins-Bold.ttf",
      fontWeight: "bold",
    },
    {
      src: "/fonts/Poppins/Poppins-Black.ttf",
      fontWeight: "ultrabold",
    },
  ],
});

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function Component({ imageSrc }) {
  return (
    <Document>
      <Page style={{ padding: "58px 16px" }}>
        {/* Header */}
        <View
          fixed
          style={{
            position: "absolute",
            top: "16px",
            left: "16px",
            width: "570px",
            height: "26px",
          }}
        >
          <View
            style={{
              marginBottom: "8px",
              display: "flex",
              flexWrap: "nowrap",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image src="/logo.png" style={{ height: "16px", width: "92px" }} />
            <Text
              style={{
                fontSize: "9px",
                fontWeight: "ultrabold",
                fontFamily: "Poppins",
              }}
            >
              123 Main Street, Dover, NH 03820-4667
            </Text>
          </View>
          <Svg height={2} width={"563px"}>
            <Defs>
              <LinearGradient id="grad1">
                <Stop offset="0%" stopColor="#005DFF" stopOpacity={1} />
                <Stop offset="44.27%" stopColor="#00A3FF" stopOpacity={1} />
                <Stop offset="100%" stopColor="#21DDFF" stopOpacity={1} />
              </LinearGradient>
            </Defs>
            <Rect width={"100%"} height={2} fill="url('#grad1')" />
          </Svg>
        </View>

        {/* Chart */}
        <LineChart imageSrc={imageSrc} />

        {/* Footer */}
        <View
          fixed
          style={{
            position: "absolute",
            top: "800px",
            left: "16px",
            width: "570px",
            height: "26px",
          }}
        >
          <Svg height={2} width={"563px"}>
            <Defs>
              <LinearGradient id="grad1">
                <Stop offset="0%" stopColor="#005DFF" stopOpacity={1} />
                <Stop offset="44.27%" stopColor="#00A3FF" stopOpacity={1} />
                <Stop offset="100%" stopColor="#21DDFF" stopOpacity={1} />
              </LinearGradient>
            </Defs>
            <Rect width={"100%"} height={2} fill="url('#grad1')" />
          </Svg>
          <View
            style={{
              marginTop: "10px",
              display: "flex",
              flexWrap: "nowrap",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                color: "#1463FF",
                fontSize: "9px",
                fontWeight: "ultrabold",
                fontFamily: "Poppins",
              }}
              render={() =>
                `Report Generated on ${
                  MONTHS[new Date().getMonth()]
                } ${new Date().getDate()}, ${new Date().getFullYear()}`
              }
            />
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: "9px",
                  fontWeight: "ultrabold",
                  fontFamily: "Poppins",
                }}
                render={({ pageNumber }) =>
                  `RealAssist Property Report | Page ${pageNumber} `
                }
              />
              <Text
                style={{
                  fontSize: "9px",
                  fontWeight: "ultrabold",
                  fontFamily: "Poppins",
                  color: "#626E99",
                }}
                render={({ totalPages }) => `of ${totalPages} `}
              />
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}
