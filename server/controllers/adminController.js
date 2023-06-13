const login = async (req, res) => {
  const { email, username } = req.body;

  try {
    // Find the user based on the provided username
    const user = await prisma.admin.findUnique({
      where: {
        email,
      },
    });

    // Check if the user exists
    if (!user) {
      return res.status(400).json("Wrong username or password!");
    }

    // Compare the provided password with the stored password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    // If the password is incorrect, return an error
    if (!isPasswordCorrect) {
      return res.status(400).json("Wrong username or password!");
    }

    // Generate a JWT token with the user's ID
    const token = jwt.sign({ id: user.id }, process.env.MY_KEY);

    // Exclude the password field from the response
    const { password, ...userData } = user;

    // Set the token as an HTTP-only cookie and send the user data in the response
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(userData);
  } catch (error) {
    // Handle any internal server errors
    res.status(500).json("Internal server error");
  }
};

const logout = (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User has been logged out.");
};

module.exports = { login, logout };
