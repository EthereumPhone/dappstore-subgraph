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
import { Bytes, store } from '@graphprotocol/graph-ts';

export function handleDeleteApp(event: DeleteAppEvent): void {
  let id = Bytes.fromHexString(event.params.appID.toHexString());
  let entity = NewApp.load(id);
  if (entity != null) {
    store.remove("NewApp", event.params.appID.toHexString());
  }
}


export function handleNewApp(event: NewAppEvent): void {
  let entity = NewApp.load(Bytes.fromHexString(event.params.appID.toHexString()));
  if (entity == null) {
    entity = new NewApp(Bytes.fromHexString(event.params.appID.toHexString()));
  }
  entity.appOwner = event.params.appOwner;
  entity.appName = event.params.appName;
  entity.appIPFSHash = event.params.appIPFSHash;
  entity.appAddData = event.params.appAddData;
  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;
  entity.save();
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
  let entity = NewApp.load(Bytes.fromHexString(event.params.appID.toHexString()));
  if (entity == null) {
    return;
  }
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