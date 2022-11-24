import axios from "axios";

export const getCurrentUser = async (userId) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}api/auth/${userId}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );

    const userData = response.data;

    if (userData.errors) {
      return {
        error: userData.errors,
      };
    }

    return userData;
  } catch (error) {
    console.log(error);
    return {
      error: error.response.data.message,
    };
  }
};

export const updateCurrentUser = async (userId, isAdmin, pseudo) => {
  try {
    const data = {
      isAdmin: isAdmin,
      pseudo: pseudo,
    };

    const response = await axios.put(
      `${process.env.REACT_APP_API_URL}api/auth/${userId}`,
      data,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );

    const userData = response.data;

    if (userData.errors) {
      return {
        error: userData.errors,
      };
    }

    return userData;
  } catch (error) {
    console.log(error);
    return {
      error: error.response.data.message,
    };
  }
};

export const loginUser = async (email, password) => {
  const data = { email, password };

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}api/auth/login`,
      data
    );

    const loginData = response.data;

    if (loginData.errors) {
      return {
        error: loginData.errors,
      };
    }

    if (loginData.token) {
      localStorage.setItem("userId", loginData.userId);
      localStorage.setItem("token", loginData.token);
      localStorage.setItem("isAdmin", loginData.isAdmin);
      return loginData.token;
    }
  } catch (error) {
    console.log(error);
    return {
      error: error.response.data.message,
    };
  }
};

export const registerUser = async (login, email, password) => {
  const data = {
    pseudo: login,
    email: email,
    password: password,
  };

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}api/auth/signup`,
      data
    );

    const registerData = response.data;

    if (registerData.errors) {
      return registerData.errors;
    }

    if (registerData.token) {
      localStorage.setItem("userId", registerData.userId);
      localStorage.setItem("token", registerData.token);
      localStorage.setItem("isAdmin", registerData.isAdmin);
      return registerData.token;
    }
  } catch (error) {
    console.log(error);

    return {
      error:
        error && error.response && error.response.data
          ? error.response.data.message
          : "",
    };
  }
};

export const fetchMessages = async () => {
  try {
    const messages = await axios.get(
      `${process.env.REACT_APP_API_URL}api/message/`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    const messagesData = await messages.data;

    return messagesData;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const createMessage = async (message, file) => {
  const formData = new FormData();
  formData.append("image", file);
  formData.append("message", message);
  formData.append("userId", localStorage.getItem("userId"));
  formData.append("likers", []);

  try {
    const messages = await axios.post(
      `${process.env.REACT_APP_API_URL}api/message/`,
      formData,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    const messagesData = await messages.data;

    return messagesData;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const modifyMessage = async (message, imageUrl, postId) => {
  const data = {
    message: message,
    imageUrl: imageUrl,
    userId: localStorage.getItem("userId"),
    likers: [],
  };

  try {
    const messages = await axios.put(
      `${process.env.REACT_APP_API_URL}api/message/${postId}`,
      data,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    const messagesData = await messages.data;

    return messagesData;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteMessage = async (postId) => {
  try {
    const messages = await axios.delete(
      `${process.env.REACT_APP_API_URL}api/message/${postId}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    const messagesData = await messages.data;
    return messagesData;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteComment = async (commentId) => {
  try {
    const messages = await axios.delete(
      `${process.env.REACT_APP_API_URL}api/comment/${commentId}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    const messagesData = await messages.data;
    return messagesData;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getCommentsByPostId = async (postId) => {
  try {
    const comments = await axios.get(
      `${process.env.REACT_APP_API_URL}api/comment/${postId}`,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    const commentsData = await comments.data;
    return commentsData;
  } catch (error) {
    console.log(error);
    return [];
  }
};
