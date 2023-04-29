import { exec, spawn } from "child_process";

exec("which unbuffer", (error) => {
  if (error) {
    console.error("\x1B[31msws requires 'unbuffer' to be installed.\x1b[0m");
    console.error("macOS: 'brew install expect' (which contains unbuffer)");
    process.exit(1);
  } else {
    const [, , ...args] = process.argv;
    const command = args.join(" ");

    if (!command) {
      console.error("\x1B[31mplease enter some command to execute\x1b[0m");
      process.exit(1);
    }

    spawn(`unbuffer ${command} | less -r`, {
      stdio: "inherit",
      shell: true,
    });
  }
});
