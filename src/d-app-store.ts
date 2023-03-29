import {
  DeleteApp as DeleteAppEvent,
  NewApp as NewAppEvent,
  ReleaseApp as ReleaseAppEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  StoreUpdate as StoreUpdateEvent,
  UpdateApp as UpdateAppEvent,
  VerifyApp as VerifyAppEvent
} from "../generated/DAppStore/DAppStore"
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
} from "../generated/schema"

export function handleDeleteApp(event: DeleteAppEvent): void {
  let entity = new DeleteApp(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.appID = event.params.appID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewApp(event: NewAppEvent): void {
  let entity = new NewApp(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.appID = event.params.appID
  entity.appOwner = event.params.appOwner
  entity.appName = event.params.appName
  entity.appIPFSHash = event.params.appIPFSHash
  entity.appAddData = event.params.appAddData

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReleaseApp(event: ReleaseAppEvent): void {
  let entity = new ReleaseApp(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.appID = event.params.appID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStoreUpdate(event: StoreUpdateEvent): void {
  let entity = new StoreUpdate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.versionCode = event.params.versionCode
  entity.ipfsHash = event.params.ipfsHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateApp(event: UpdateAppEvent): void {
  let entity = new UpdateApp(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.appID = event.params.appID
  entity.appOwner = event.params.appOwner
  entity.appName = event.params.appName
  entity.appIPFSHash = event.params.appIPFSHash
  entity.appAddData = event.params.appAddData

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVerifyApp(event: VerifyAppEvent): void {
  let entity = new VerifyApp(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.appID = event.params.appID

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
