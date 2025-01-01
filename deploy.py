import subprocess
import sys
import os

def run_command(command):
    try:
        process = subprocess.run(command, shell=True, check=True, text=True, capture_output=True)
        print(process.stdout)
        return True
    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")
        print(e.stdout)
        print(e.stderr)
        return False

def check_prerequisites():
    if not os.path.exists('node_modules'):
        print("⚠️  Installing dependencies first...")
        if not run_command('npm install'):
            return False
    return True

def main():
    if not check_prerequisites():
        print("❌ Failed to install prerequisites!")
        return 1

    print("🧹 Cleaning previous build...")
    if os.path.exists('dist'):
        try:
            if sys.platform == "win32":
                run_command('rmdir /s /q dist')
            else:
                run_command('rm -rf dist')
        except Exception as e:
            print(f"Warning: Could not clean dist directory: {e}")

    print("🏗️  Building the application...")
    build_command = 'ng build --configuration production --base-href "/gourmunity/"'
    
    if run_command(build_command):
        print("✅ Build successful!")
        print("🚀 Deploying to GitHub Pages...")
        
        deploy_command = "npx angular-cli-ghpages --dir=dist/browser"
        if run_command(deploy_command):
            print("✨ Deployment successful!")
            print("🌐 Your app should be available at: https://leuenflo.github.io/gourmunity/")
            return 0
        else:
            print("❌ Deployment failed!")
            return 1
    else:
        print("❌ Build failed!")
        return 1

if __name__ == "__main__":
    sys.exit(main()) 