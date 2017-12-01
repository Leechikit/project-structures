{
    project: {
        type: "input",
        message: "请输入项目名："
    },
    system: {
        type: "list",
        message:"请选择项目类型：",        
        choices: [
            {
                name: "mobile",
                value: "mobile"
            },
            {
                name: "pc",
                value: "pc"
            }
        ]
    },
    author:{
        type: "input",
        message:"请输入开发者：",
        default: "lizijie"
    }
}