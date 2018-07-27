import React from "react"
import ReactDOM from "react-dom"
import {NotFound} from "./components/routcomponents"
import {shallow} from "enzyme"

describe("Unit Test Demo", () => {

    it("should verify addition of 2 and 4", () => {
        expect(2+4).toEqual(6)
    })

    it("verify component rendering", () => {
        let d = document.createElement("div")
        ReactDOM.render(<NotFound />, d)
        ReactDOM.unmountComponentAtNode(d)
    })

    it("verify from tag", () => {
        expect(shallow(<NotFound />).find("form").exists()).toBe(true)
    })

    it("email text box", () => {
        let wrapper = shallow(<NotFound />)
        expect(wrapper.find("#email").length).toEqual(1)
    })

    it("verify state of a component", () => {
        let wrapper = shallow(<NotFound />)
        expect(wrapper.state("email")).toEqual("satya@abc.com")
    })

})