#!/usr/bin/env node

import { Command } from "commander"
import { onCreate } from "./create"

// 创建命令对象
const program = new Command()

// 注册命令、参数、回调
program
  .command("create")
  .description("创建一个type-challenges题目")
  .option("-n --name <name>", "创建题目名称")
  .action(onCreate)

// 执行命令行参数解析
program.parse()
