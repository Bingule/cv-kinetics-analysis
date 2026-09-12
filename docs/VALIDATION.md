# Version 1.0.0 validation

Validated on 2026-09-12. Source build: `22accc9` in the separate private desktop repository.

| Platform | Build | Packaged application smoke test |
| --- | --- | --- |
| Windows x64 | Passed | Passed locally and on GitHub Actions |
| macOS Apple Silicon (arm64) | Passed | Passed on macOS 15 runner |
| macOS Intel (x64) | Passed | Passed on macOS 15 Intel runner |

The CI matrix completed successfully for all three platforms. The test suite contains 173 passing tests, including hash checks for the 18 preserved library files.

Packaged-app smoke checks cover CSV/TXT/XLSX import and result display, CSV/SVG/PNG export, language switching, language persistence after page reload, language-specific help contacts, and outbound-network blocking. Test data are synthetic, not confidential experimental data.

This is automated validation, not a guarantee for every OS version or hardware configuration. Clipboard copying and full-application-restart persistence were not part of this smoke test. Mac packages use ad-hoc signing, without Apple Developer ID signing or notarization. Windows packages are unsigned.

## 中文

Windows x64、Mac M 系列、Mac Intel 三个构建及打包后程序自动测试均通过；共 173 项测试通过。三种文件均能导入、分析并显示结果，CSV/SVG/PNG 可导出。

语言刷新持久化和按语言区分的帮助邮箱已验证。自动测试未覆盖实际剪贴板复制及完整退出再启动的持久化；也不代表已测试所有系统版本和硬件。首版软件没有商业代码签名/Apple 公证，首次运行可能出现系统安全提示。
