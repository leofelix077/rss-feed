import React from "react";
import { mount } from "enzyme";
import { describe, expect, it } from "@jest/globals";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import "jsdom-global/register";
import mockdate from "mockdate";

const mockStore = configureMockStore();

describe("RSS Feed: ", () => {
  it("renders correctly", () => {
    mockdate.set(1593118700000);
    const store = {};

    const storeProvider = mockStore(store);

    const wrapper = mount(
      (
        <Provider store={storeProvider}>
          <div>Renders</div>
        </Provider>
      ) as any
    );
    expect(wrapper).toMatchSnapshot();
  });
});
