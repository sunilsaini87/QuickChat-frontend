import { memo } from "react";
import PropTypes from "prop-types";
import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import { Avatar, IconButton, ListItem, Stack, Typography } from "@mui/material";
import { transformImage } from "../../lib/features";

const UserItem = ({
  user,
  handler,
  handlerIsLoading = false,
  isAdded = false,
  styling = {},
}) => {
  const { name, _id, avatar } = user;

  return (
    <ListItem>
      <Stack
        direction="row"
        alignItems="center"
        spacing="1rem"
        width="100%"
        {...styling}
      >
        <Avatar src={transformImage(avatar)} />

        <Typography
          variant="body1"
          sx={{
            flexGrow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
          }}
        >
          {name}
        </Typography>

        <IconButton
          size="small"
          sx={{
            bgcolor: isAdded ? "error.main" : "primary.main",
            color: "white",
            "&:hover": {
              bgcolor: isAdded ? "error.dark" : "primary.dark",
            },
          }}
          onClick={() => handler(_id)}
          disabled={handlerIsLoading}
        >
          {isAdded ? <RemoveIcon /> : <AddIcon />}
        </IconButton>
      </Stack>
    </ListItem>
  );
};

UserItem.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    avatar: PropTypes.string,
  }).isRequired,
  handler: PropTypes.func.isRequired,
  handlerIsLoading: PropTypes.bool,
  isAdded: PropTypes.bool,
  styling: PropTypes.object,
};

UserItem.defaultProps = {
  handlerIsLoading: false,
  isAdded: false,
  styling: {},
};

export default memo(UserItem);
