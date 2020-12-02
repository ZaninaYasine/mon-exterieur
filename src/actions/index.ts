/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from "axios";

export const ChangeImage = (image: any) => {
  return {
    type: "CHANGE_IMAGE",
    image,
  };
};

export const getImage = () => {
  return (dispatch: any) => {
    axios
      .get(
        "https://api.unsplash.com/photos/random?client_id=Htf6bZh-KBiyEg9GPQjei6ySq-zs9dULZluZp2-UdtA"
      )
      .then((response) => {
        dispatch(ChangeImage(response.data.urls.full));
      });
  };
};
