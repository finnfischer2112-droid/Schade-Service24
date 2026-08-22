---
name: Git provider vs terminal auth
description: Replit GitHub provider authentication can differ from credentials used by terminal git commands.
---

The Replit Git pane and terminal Git authentication are separate. A GitHub connection can show as active and successfully push through the Git pane while `git push` in the shell still reports an invalid or missing token.

**Why:** The workspace's shell credential state may remain stale even after the Replit account-level Git provider is reconnected.

**How to apply:** Prefer the Replit Git pane for pushing when terminal authentication fails; never ask the user to paste a GitHub token into chat.