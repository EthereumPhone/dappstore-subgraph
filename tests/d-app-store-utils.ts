import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  DeleteApp,
  NewApp,
  ReleaseApp,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  StoreUpdate,
  UpdateApp,
  VerifyApp
} from "../generated/DAppStore/DAppStore"

export function createDeleteAppEvent(appID: BigInt): DeleteApp {
  let deleteAppEvent = changetype<DeleteApp>(newMockEvent())

  deleteAppEvent.parameters = new Array()

  deleteAppEvent.parameters.push(
    new ethereum.EventParam("appID", ethereum.Value.fromUnsignedBigInt(appID))
  )

  return deleteAppEvent
}

export function createNewAppEvent(
  appID: BigInt,
  appOwner: Address,
  appName: string,
  appIPFSHash: string,
  appAddData: string
): NewApp {
  let newAppEvent = changetype<NewApp>(newMockEvent())

  newAppEvent.parameters = new Array()

  newAppEvent.parameters.push(
    new ethereum.EventParam("appID", ethereum.Value.fromUnsignedBigInt(appID))
  )
  newAppEvent.parameters.push(
    new ethereum.EventParam("appOwner", ethereum.Value.fromAddress(appOwner))
  )
  newAppEvent.parameters.push(
    new ethereum.EventParam("appName", ethereum.Value.fromString(appName))
  )
  newAppEvent.parameters.push(
    new ethereum.EventParam(
      "appIPFSHash",
      ethereum.Value.fromString(appIPFSHash)
    )
  )
  newAppEvent.parameters.push(
    new ethereum.EventParam("appAddData", ethereum.Value.fromString(appAddData))
  )

  return newAppEvent
}

export function createReleaseAppEvent(appID: BigInt): ReleaseApp {
  let releaseAppEvent = changetype<ReleaseApp>(newMockEvent())

  releaseAppEvent.parameters = new Array()

  releaseAppEvent.parameters.push(
    new ethereum.EventParam("appID", ethereum.Value.fromUnsignedBigInt(appID))
  )

  return releaseAppEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createStoreUpdateEvent(
  versionCode: BigInt,
  ipfsHash: string
): StoreUpdate {
  let storeUpdateEvent = changetype<StoreUpdate>(newMockEvent())

  storeUpdateEvent.parameters = new Array()

  storeUpdateEvent.parameters.push(
    new ethereum.EventParam(
      "versionCode",
      ethereum.Value.fromUnsignedBigInt(versionCode)
    )
  )
  storeUpdateEvent.parameters.push(
    new ethereum.EventParam("ipfsHash", ethereum.Value.fromString(ipfsHash))
  )

  return storeUpdateEvent
}

export function createUpdateAppEvent(
  appID: BigInt,
  appOwner: Address,
  appName: string,
  appIPFSHash: string,
  appAddData: string
): UpdateApp {
  let updateAppEvent = changetype<UpdateApp>(newMockEvent())

  updateAppEvent.parameters = new Array()

  updateAppEvent.parameters.push(
    new ethereum.EventParam("appID", ethereum.Value.fromUnsignedBigInt(appID))
  )
  updateAppEvent.parameters.push(
    new ethereum.EventParam("appOwner", ethereum.Value.fromAddress(appOwner))
  )
  updateAppEvent.parameters.push(
    new ethereum.EventParam("appName", ethereum.Value.fromString(appName))
  )
  updateAppEvent.parameters.push(
    new ethereum.EventParam(
      "appIPFSHash",
      ethereum.Value.fromString(appIPFSHash)
    )
  )
  updateAppEvent.parameters.push(
    new ethereum.EventParam("appAddData", ethereum.Value.fromString(appAddData))
  )

  return updateAppEvent
}

export function createVerifyAppEvent(appID: BigInt): VerifyApp {
  let verifyAppEvent = changetype<VerifyApp>(newMockEvent())

  verifyAppEvent.parameters = new Array()

  verifyAppEvent.parameters.push(
    new ethereum.EventParam("appID", ethereum.Value.fromUnsignedBigInt(appID))
  )

  return verifyAppEvent
}
