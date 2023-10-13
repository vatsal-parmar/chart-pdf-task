import {
  Defs,
  LinearGradient,
  Rect,
  Stop,
  Svg,
  Text,
  View,
  Image,
} from "@react-pdf/renderer";

const LineChart = ({ style, imageSrc }) => {
  return (
    <View wrap={false} style={{ ...style }}>
      <View
        style={{
          height: "24px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            src="/location.png"
            style={{ height: "16px", width: "16px" }}
          />
          <Text
            style={{
              fontSize: "9px",
              fontFamily: "Poppins",
              marginLeft: "5px",
            }}
          >
            Crime
          </Text>
        </View>
        <View style={{ marginLeft: "auto" }}>
          <Svg height={2} width={"500px"}>
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
      </View>
      <View
        style={{
          marginTop: "8px",
          backgroundColor: "#E8EEFB",
          height: "24px",
          display: "flex",
          justifyContent: "center",
          padding: "0 12px",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
        }}
      >
        <Text
          style={{
            color: "#1463FF",
            fontSize: "9px",
            fontFamily: "Poppins",
          }}
        >
          Burglary
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#F2F4F5",
          borderBottomLeftRadius: "12px",
          borderBottomRightRadius: "12px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: "9px",
            fontFamily: "Poppins",
            transform: "rotate(270deg)",
          }}
        >
          Arrests
        </Text>
        <View style={{ width: "90%", margin: "25px 0" }}>
          {imageSrc && (
            <Image
              style={{
                borderRadius: "12px",
              }}
              src={`${imageSrc}`}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default LineChart;
