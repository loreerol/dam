import Switch from "@mui/material/Switch";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// To do: Make this toggle more reusable by having it accept an icon and styling as props

interface FavoritesToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const FavoritesToggle = ({ checked, onChange }: FavoritesToggleProps) => (
  <Switch
    checked={checked}
    onChange={(e) => onChange(e.target.checked)}
    icon={<FavoriteBorderIcon fontSize="small" />}
    checkedIcon={<FavoriteIcon fontSize="small" />}
    color="error"
    sx={{ padding: 1 }}
  />
);

export default FavoritesToggle;
