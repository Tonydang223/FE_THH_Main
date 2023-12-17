import { Typography } from "antd";
const { Text } = Typography;
import PulseLoader from "react-spinners/PulseLoader";
import  './load.scss';
export default function Loading() {
  return (
    <div className="loadingWrap">
      <Text style={{ marginBottom: "10px", fontSize: "28px", color: '#fff'}}>
        Đang Tải
      </Text>
      <PulseLoader
        color={"#fff"}
        loading={true}
        cssOverride={{marginBottom: '30px'}}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
