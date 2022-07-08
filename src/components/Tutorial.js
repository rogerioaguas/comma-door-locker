import React from "react";
import {Container} from "react-bootstrap";
import Markdown from "marked-react";

export function Tutorial() {


    return (
            <Container>
                <main>
                    <Markdown>
                        {"# Configuration\n" +
                        "## What do you need?\n" +
                        "- Comma device;\n" +
                        "- Knowledge to connect with ssh;\n" +
                        "\n" +
                        "## Steps\n" +
                        "\n" +
                        "### 1 - Comma Device\n" +
                        "- Connect in your comma with ssh ;\n" +
                        "- Go to tools folder (if not exist create with command `mkdir tools`) ;\n" +
                        "``` shell script\n" +
                        "> $ cd tools/\n" +
                        "> $ git clone https://github.com/rogerioaguas/door-lock-unlock-server\n" +
                        "> $ cd door-lock-unlock-server/\n" +
                        "> $ python3 run_server.py\n" +
                        "```\n" +
                        "- Go to your device and enable tethering ;\n" +
                        "\n" +
                        "### 2 - In your Mobile Phone \n" +
                        "\n" +
                        "- Go to `https://rogerioaguas.github.io/comma-door-locker/` ;\n" +
                        "- Install the web-app ;\n" +
                        "- Connect with your mobile phone on hotspot created ;\n" +
                        "- Now open the web-app `Comma Locker` ;\n" +
                        "- Get ip generate from `Comma device hotspot` ;\n" +
                        "- Write on field \"x.x.x.x:5000\" ;\n" +
                        "- Now try lock and unlock the car door ; \n" +
                        "\n" +
                        "\n" +
                        "## Todo\n" +
                        "\n" +
                        "- [ ] Add this feature on fork Cm3\n" +
                        "- [ ] Add this feature on fork Eon Gold, Cm2 and etc...\n" +
                        "- [ ] ...\n" +
                        "\n" +
                        "## Contribution\n" +
                        "\n" +
                        "- Comma Locker UI: `https://github.com/rogerioaguas/comma-door-locker`\n" +
                        "- Comma Locker Server: `https://github.com/rogerioaguas/door-lock-unlock-server`\n" +
                        " \n" +
                        "\n"}
                    </Markdown>
                </main>
            </Container>
    )

}
