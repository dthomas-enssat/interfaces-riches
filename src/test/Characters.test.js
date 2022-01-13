import React from "react"
import { render } from "@testing-library/react"
import { CharactersComponents} from "../components/CharacterComponent"

test("render without crashing", () => {
    const div = document.createElement("div");
    render("<CharactersComponent />", div)
})

test("contains characters-list id on document", () => {
    const { container } = render("<CharactersComponent />")
    const character = container.querySelector("#characters-list")
    expect(character).toBeInTheDocument();
})

test("contains character-item class on <ul> balise", () => {
    const { container } = render("<CharactersComponent />")
    const character = container.querySelector('.character-item')
    expect(character.nodeName).toBe("UL");
})