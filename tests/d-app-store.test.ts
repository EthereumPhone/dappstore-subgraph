import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import { DeleteApp } from "../generated/schema"
import { DeleteApp as DeleteAppEvent } from "../generated/DAppStore/DAppStore"
import { handleDeleteApp } from "../src/d-app-store"
import { createDeleteAppEvent } from "./d-app-store-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let appID = BigInt.fromI32(234)
    let newDeleteAppEvent = createDeleteAppEvent(appID)
    handleDeleteApp(newDeleteAppEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DeleteApp created and stored", () => {
    assert.entityCount("DeleteApp", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DeleteApp",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "appID",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
