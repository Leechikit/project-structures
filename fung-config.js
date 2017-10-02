{
    project: {
        type: "input",
        message: "请输入项目名："
    },
    title: {
        type: "input",
        message: "请输入标题：",
        default: "default title"
    },
    author:{
        type: "input",
        message:"请输入开发者：",
        default: "leechikit"
    }
    system: {
        type: "list",
        message: "请选择项目类型",
        choices: ["mobile", "pc"],
        default: "mobile"
    }
}