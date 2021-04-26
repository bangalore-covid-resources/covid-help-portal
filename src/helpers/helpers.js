import { NOT_AVAILABLE, PROVIDER_STATUS } from "../constants/constants";

const helpers = {
  getStringValue(value) {
    return value?.length > 0 ? value : NOT_AVAILABLE;
  },

  getStatusBadgeVariant(status) {
    let variant = "";
    switch (status) {
      case PROVIDER_STATUS.UNVERIFIED:
        variant = "danger";
        break;
      case PROVIDER_STATUS.VERIFIED:
        variant = "success";
        break;
      case PROVIDER_STATUS.INPROGRESS:
        variant = "warning";
        break;
      default:
        variant = "danger";
        break;
    }
    return variant;
  },
};

export default helpers;
