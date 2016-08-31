#
* 第三方登入框架
* [Passport](http://passportjs.org/)
* 每個登入服務都是一種 strategy

# 基本流程
// 初始化 
passport.initialize()

// 初始化 session
passport.session()

// 設定認證方式
passport.authenticate('facebook', ...);

// 建立用戶 session
passport.serializeUser( (user, done)=>{
    done(null, user);
});

// 刪除用戶 session
passport.deserializeUser( (user, done)=>{
    done(null, user);
});

// 登出
passport.logOut();

# strategy
* passport-facebook
* passport-github2
* passport-google-oauth
* passport-local

