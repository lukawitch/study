const get = async (req, res, next) => {
  try {
    // throw new Error("djksfjlkdsfjdslkf");
    return res.json({ message: "users get" });
  } catch (e) {
    next(e);
  }
};

export { get };
