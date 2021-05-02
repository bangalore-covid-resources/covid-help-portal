import { NOT_AVAILABLE, PROVIDER_STATUS } from "../constants/constants";

const helpers = {
  getStringValue(value) {
    return value?.length > 0 ? value : NOT_AVAILABLE;
  },

  getStatusBadgeVariant(status) {
    let variant = "";
    switch (status) {
      case PROVIDER_STATUS.UNVERIFIED:
        variant = <span className="m-1 badge badge-warning">Unverified</span>;
        break;
      case PROVIDER_STATUS.VERIFIED:
        variant = <span className="m-1 badge badge-success">Verified</span>;
        break;
      case PROVIDER_STATUS.INPROGRESS:
        variant = <span className="m-1 badge badge-warning">In Progress</span>;
        break;
      default:
        variant = <span className="m-1 badge badge-danger">Potential fraud</span>;
        break;
    }
    return variant;
  },
};

export default helpers;
