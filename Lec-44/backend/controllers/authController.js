const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        // check if user exists?
        const user = await UserModel.findOne({email});
    
        if(user){
            // check if valid password
            const isValid = await bcrypt.compare(password, user.password);
            if(!isValid){
                //  user exists but invalid password
                return res.status(400).json({
                    success:false,
                    message: "Invalid Credentials"
                })
            }

            // user exists and valid password
            return res.status(200).json({
                success:true,
                id: user._id,
                email: user.email,
                fullName: user.fullName,
                token: createToken({id: user._id})
            })
        }
    
        // user or password invalid
        res.status(400).json({
            success:false,
            message: "Invalid Credentials"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "something went wrong"
        })
    }
}

module.exports = {
    login
}