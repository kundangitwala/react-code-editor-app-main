// import { Box } from "@chakra-ui/react";
// import CodeEditor from "./components/CodeEditor";

// function App() {
//   return (
//     <Box minH="100vh" bg="#0f0a19" color="gray.200" px={6} py={8}>
//       <CodeEditor />
//     </Box>
//   );
// }

// export default App;

// Modified App.jsx to include a dark mode toggle button
// import { Box, Switch, useColorMode } from "@chakra-ui/react";
// import CodeEditor from "./components/CodeEditor";

// function App() {
//   const { colorMode, toggleColorMode } = useColorMode();

//   return (
//     <Box minH="100vh" bg={colorMode === "light" ? "gray.50" : "#0f0a19"} color={colorMode === "light" ? "black" : "gray.200"} px={6} py={8}>
//       <Switch
//         isChecked={colorMode === "dark"}
//         onChange={toggleColorMode}
//         mb={4}
//         aria-label="Toggle dark mode"
//         colorScheme="orange"
//       />
//       <CodeEditor />
//     </Box>
//   );
// }

// export default App;


// Modified App.jsx to include a dark mode toggle button
import { Box, Switch, useColorMode, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import CodeEditor from "./components/CodeEditor";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [code, setCode] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCode(e.target.result);
      };
      reader.readAsText(file);
    }
  };

  const handleFileDownload = () => {
    const blob = new Blob([code], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "code.txt";
    link.click();
  };

  return (
    <Box minH="100vh" bg={colorMode === "light" ? "gray.50" : "#0f0a19"} color={colorMode === "light" ? "black" : "gray.200"} px={6} py={8}>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        mb={4}
        aria-label="Toggle dark mode"
        colorScheme="orange"
      />
      <Box mb={4}>
        <Input type="file" onChange={handleFileUpload} mb={2} aria-label="Upload code file" />
        <Button onClick={handleFileDownload} colorScheme="orange">Download Code</Button>
      </Box>
      <CodeEditor value={code} onChange={(newCode) => setCode(newCode)}  />
    </Box>
  );
}

export default App;
