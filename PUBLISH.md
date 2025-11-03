# Publishing to Open VSX

This guide explains how to publish the Operator Mono Themes extension to [Open VSX](https://open-vsx.org/).

## Prerequisites

1. Install the Open VSX CLI tool:
   ```bash
   npm install -g @openvsx/cli
   ```

2. Create an account on [Open VSX](https://open-vsx.org/) and get your Personal Access Token:
   - Go to https://open-vsx.org/
   - Sign in with your GitHub account
   - Go to your profile → Access Tokens
   - Create a new token with appropriate permissions

## Publishing Steps

### 1. Package the Extension

First, install dependencies (if using vsce) or package the extension:

```bash
# Option 1: Using vsce (Visual Studio Code Extensions CLI)
npm install -g @vscode/vsce
vsce package

# Option 2: Using Open VSX CLI to package and publish directly
```

### 2. Login to Open VSX

```bash
ovsx login <your-openvsx-username>
```

Enter your Personal Access Token when prompted.

### 3. Publish to Open VSX

```bash
ovsx publish <path-to-.vsix-file>
```

Or if you want to publish directly:

```bash
ovsx publish
```

### 4. Verify Publication

Check your extension on Open VSX:
https://open-vsx.org/extension/Valiantsin/operatormonodarktheme

## Alternative: Using vsce and ovsx together

```bash
# Package using vsce
vsce package

# Publish to Open VSX using the generated .vsix file
ovsx publish operatormonodarktheme-2.1.0.vsix
```

## Updating the Extension

1. Update the version in `package.json`
2. Update `CHANGELOG.md` with the new version
3. Run the publish commands again

```bash
vsce package
ovsx publish operatormonodarktheme-<new-version>.vsix
```

## Troubleshooting

- **Authentication issues**: Make sure your Personal Access Token is valid and has the correct permissions
- **Version conflicts**: Ensure the version in `package.json` is higher than the currently published version
- **Package size**: Open VSX has size limits, ensure `.vscodeignore` excludes unnecessary files

