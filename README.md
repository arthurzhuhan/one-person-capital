# OnePersonCapital (OPCapital)

> **The Investor Console for One-Person-Capital Companies.**
>
> **基于 AI 治理架构的“一人资本”投资人控制台。**

[![License: MIT](https://img.shields.io/badge/License-MIT-white.svg)](https://opensource.org/licenses/MIT)
[![Language: EN/ZH](https://img.shields.io/badge/Language-EN%2FZH-white.svg)](#)

[English](#english) | [简体中文](#简体中文)

---

<a name="english"></a>

## 🌟 What is OnePersonCapital?

**OnePersonCapital** is an orchestration and governance layer for autonomous AI companies. 

If tools like **OpenClaw** or **Claude Code** are the *employees*, **OnePersonCapital** is the *company*. It transforms a collection of AI agents into a functioning organization with high-level goals, accountability, and financial controls.

### The Problem: You're Babysitting Agents Instead of Running Companies
AI can code, test, and market, but it can't run a business end-to-end without constant human "babysitting."
- **Human Bottleneck:** You spend all day context-switching between 20+ terminals.
- **Runaway Costs:** Agents loop endlessly, burning tokens before you notice.
- **No Vision:** Time spent managing agents is time NOT spent on learning, thinking, and inspiring.

### The Solution: Be the Investor, Not the Manager
OPCapital implements a **Board → CEO → Employee** hierarchy:
- **Board (You):** Set the mission, approve budgets, and steer the ship.
- **CEO Agent:** Converts vision into Business Plans (BP), hires employees, and reports progress.
- **Employee Agents:** Specialists (OpenClaw, etc.) executing specific tasks within their scope.

**You focus on: Learn → Think → Inspire → Experience**
**Your CEO Agent handles: Plan → Hire → Allocate → Execute → Report**

## 🏗️ Three-Tier Governance Architecture

1.  **Governance Layer (Board of Directors):** Holds the purse strings. It audits CEO performance against the BP and provides emergency overrides (pause/terminate).
2.  **Execution Layer (The Blackbox Company):** CEO instantiates a "virtual office" (isolated container/sandbox) where specialized agents collaborate.
3.  **Evolution Layer (Global Experience Vault):** A cross-project RAG system that captures lessons from failed "races" or successful pivots, ensuring your system gets smarter with every project.

## ✨ Key Features

-   **Investor Terminal:** A minimalist, pure white dashboard for high-level monitoring.
-   **BP Negotiation Room:** A structured interface where you "interview" CEO agents and finalize machine-readable Business Plans.
-   **Cost Control:** Monthly budgets per agent/company. If they hit the limit, they stop.
-   **Heartbeat Protocol:** Agents wake on schedule, act, report, and sleep. No context pollution.
-   **Multi-Company Isolation:** Run your entire portfolio from a single control plane.
-   **Multilingual:** Ready for the global market with English and Simplified Chinese support.

## 🚀 Quick Start

```bash
# Direct onboarding
npx one-person-capital onboard --yes

# Manual setup
git clone https://github.com/arthurzhuhan/one-person-capital.git
cd one-person-capital
pnpm install
pnpm dev
```

---

<a name="简体中文"></a>

## 🌟 什么是 OnePersonCapital?

**OnePersonCapital** 是自主 AI 公司的编排与治理层。

如果说 **OpenClaw** 或 **Claude Code** 是公司的*员工*，那么 **OnePersonCapital** 就是*公司*本身。它将一群分散的 AI Agent 交由一个CEO agent管理，继而使之转化为一个有目标、有问责制度、有财务管控的运作组织。

### 痛点：你在“照看”智能体，而不是在“经营”公司
AI 能够编码、测试和推广，但如果没有人类的不断干预，它无法端到端地运行一门生意。
- **人类瓶颈：** 你整天在 20 多个终端之间切换上下文，精疲力竭。
- **成本失控：** 智能体陷入死循环，在你察觉前就耗尽了 Token 额度。
- **缺乏愿景：** 管理细节占据了你绝大部分精力，导致你没有时间去学习、思考和产生灵感。

### 解决方案：做投资人，而不是管理员
OPCapital 实现了 **董事会 → CEO → 员工** 的管理层级：
- **董事会 (你)：** 设定使命、批准预算、把控航向。
- **CEO 智能体：** 将你的灵感转化为商业计划书 (BP)，招聘员工，汇报进度。
- **员工智能体：** 垂直领域的专家 (如 OpenClaw)，在职责范围内执行具体任务。

**你专注于：学习 → 思考 → 灵感 → 体验**
**你的 AI CEO 处理：规划 → 招聘 → 分配 → 执行 → 汇报**

## 🏗️ 三层治理架构

1.  **治理层 (董事会 Agent)：** 掌管钱袋子。它对照 BP 审计 CEO 的绩效，并提供紧急干预手段（暂停/终止）。
2.  **执行层 (黑盒公司)：** CEO 实例化一个“虚拟办公室”（隔离的容器/沙盒），专业智能体在此协作。
3.  **进化层 (全局经验资产库)：** 跨项目的 RAG 系统，捕获失败“赛马”的教训或成功项目的范式，让你的系统随项目积累不断进化。

## ✨ 核心特性

-   **投资人控制台：** 基于 `shadcn/ui` 的极简纯白仪表盘，拒绝微观管理。
-   **BP 谈判室：** 结构化的面试界面，将模糊的想法转化为机器可读的商业计划书。
-   **成本管控：** 智能体/公司级别的月度预算。触达上限即刻停止，杜绝成本爆炸。
-   **心跳协议：** 智能体定时唤醒、执行、汇报、休眠。防止上下文污染。
-   **多公司隔离：** 通过一个控制平面管理你的整个投资组合。
-   **多语言支持：** 原生支持中英文即时切换，面向全球用户。

## 🚀 快速开始

```bash
# 自动初始化
npx one-person-capital onboard --yes

# 手动安装
git clone https://github.com/arthurzhuhan/one-person-capital.git
cd one-person-capital
pnpm install
pnpm dev
```

---

## 📄 License

MIT © [Arthur](https://github.com/arthurzhuhan)
