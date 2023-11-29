import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import "./cards.css";

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

export default function Card({ imageSrc, follows, title, type, totalNoSongs }) {
  console.log("checking from card page", totalNoSongs);
  return (
    <div className="card-wrapper" type={type}>
      <BootstrapTooltip title={`${totalNoSongs} Songs`} placement="top">
        <div className="card">
          <div className="card-img-frame">
            <img src={imageSrc} alt="card-pic" />
          </div>
          <div className="card-content">
            <span className="card-pill">{follows} Follows</span>
          </div>
        </div>

        <p className="card-label">{title}</p>
      </BootstrapTooltip>
    </div>
  );
}
