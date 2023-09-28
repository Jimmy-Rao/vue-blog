/*
 * @Author: Ayan
 * @Date: 2023-09-28 10:31:07
 * @LastEditors: Ayan
 * @LastEditTime: 2023-09-28 11:41:57
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
        'plugin:prettier/recommended', // 添加 prettier 插件
        'plugin:jest/recommended'
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
