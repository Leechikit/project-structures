{
    group: {
        type: "input",
        message: "请输入集合名："
    },
    project: {
        type: "input",
        message: "请输入项目名："
    },
    author: {
        type: "input",
        message:"请输入开发者：",
        default: "lizijie"
    },
    system: {
        type: "list",
        message:"开发平台：",        
        choices: [
            {
                mobile: "mobile"
            },
            {
                pc: "pc"
            }
        ]
    }
}
