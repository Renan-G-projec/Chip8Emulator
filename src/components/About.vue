<!-- Ad Maiorem Dei Gloriam! -->

<template>
    <div class="about-header">
        <h2>About Chip8</h2>
    </div>

    <div class="content">
        <p>
            Chip8 is a <span class="cyan">Interpreted Programming Language</span> developed in the
            mid 1970s. It is not considered an actual hardware because none hardware was actually made.
            Instead, the Instruction Set Architecture (ISA), the table that provides what <span class="cyan">Opcodes</span>,
            was developed.
        </p>
        <p>
            The original game ISA contains 33 Opcodes, 16 8-bit registers and only 4kb of RAM. The rom start traditionally
            at the adress <span class="cyan">0x200</span> (Adress <span class="cyan">512</span>) because those bytes
            were for the interpreter (modern roms do not need this, is just legacy where we put raw data like character sprites).
        </p>
        <p>
            Chip8 is so much fun to make an emulator about and is an amazing project. Also, it is easier to get into the 
            <span class="cyan">Assembly Programming Language</span> by chip8, considering the small amount of instructions.
            Is a great start also for coding in raw <span class="cyan">Machine Language</span>.
        </p>
        <p>
            Github source for this emulator: <span class="cyan"><a href="https://github.com/Renan-G-projec/Chip8Emulator">https://github.com/Renan-G-projec/Chip8Emulator</a></span>
        </p>
    </div>
</template>

<style scoped>
    .about-header {
        display: flex;
        justify-content: center;
        color: white;

        font-size: 2rem;
    }

    .about-header h2 {
        text-align: center;
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;

        max-width: 70rem;
        width: 85%;
    }

    .content p {
        color: white;
    }

    .cyan {
        color: cyan;
    }

    a {
        color: inherit;
    }
</style>