const Joi = require('joi');


const registerValidation = data => {
    const schema = Joi.object({
        first_name: Joi.string()
                    .max(10)
                    .required(),
                    
        last_name: Joi.string()
                    .max(10)
                    .required(),
                   
        email: Joi.string()
                .required()
                .email(),
        password: Joi.string()
                    .min(6)
                    .required()
        
    });
    return schema.validate(data);
};

// const loginValidation = data => {
//     const schema = {       
//         email: Joi.string()
//                 .required()
//                 .email(),
//         password: Joi.string()
//                     .min(6)
//                     .required()
        
//     };
//     return Joi.validate(data, schema);
// };

module.exports.registerValidation = registerValidation;
//module.exports.loginValidation = loginValidation;
