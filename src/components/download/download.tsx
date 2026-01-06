import download from "../../assets/icons/download.svg";
import { Text } from "../text/text";

export default function Download() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <Text preset="text" style={{ color: "#7B4AE2", opacity: "0.7" }}>
        Download CV
      </Text>
      <img src={download} alt="avatar" width={20} height={20} />
    </div>
  );
}
