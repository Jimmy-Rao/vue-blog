/*
 * @Author: Ayan
 * @Date: 2023-09-28 10:31:07
 * @LastEditors: Ayan
 * @LastEditTime: 2023-09-28 10:42:35
 * @Description: file not
 */
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:vue/vue3-essential",
        'plugin:prettier/recommended' // 添加 prettier 插件
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
    }
}
