import { NOT_AVAILABLE, PROVIDER_STATUS } from "../constants/constants";

const helpers = {
  getStringValue(value) {
    return value?.length > 0 ? value : NOT_AVAILABLE;
  },

  getStatusBadgeClass(status) {
    let statusBadge = "";
    switch (status) {
      case PROVIDER_STATUS.UNVERIFIED:
        statusBadge = "text-white bg-danger";
        break;
      case PROVIDER_STATUS.VERIFIED:
        statusBadge = "text-white bg-success";
        break;
      case PROVIDER_STATUS.INPROGRESS:
        statusBadge = "bg-warning";
        break;
      default:
        statusBadge = "text-white bg-success";
        break;
    }
    return statusBadge;
  },
};

export default helpers;
