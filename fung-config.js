{
    group: {
        type: "input",
        message: "请输入集合名："
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
    project: {
        type: "input",
        message: "请输入项目名："
    },
    author:{
        type: "input",
        message:"请输入开发者：",
        default: "lizijie"
    }
}