class AttackHandler {
	static get ID() {
		return 30692;
	}

	constructor() {
		this._handler = function (e, a) {
			var shipAttackCmd = JSON.parse(e.detail);
			let attackerID = shipAttackCmd[Variables.attackerId];
			let shipAttackedID = shipAttackCmd[Variables.attackedId];
			try {
				if (window.settings.sentinelMode && a.sentinelship != null) {
					if (attackerID == window.globalSettings.sentinelid) {
						a.sentinelship.targetId = shipAttackedID;
					}     
					if (shipAttackedID == window.globalSettings.sentinelid) {
						a.sentinelship.attackerID = attackerID;
					}
				}
				let ship = a.ships[attackerID];
				if (ship != null){
					if (shipAttackedID == window.hero.id) {
						a.ships[attackerID].attacksUs = true;
					} else {
						a.ships[attackerID].attacksUs = false;	
					}
				}
				
			} catch (exception) {
				console.error(exception);
				console.log(shipAttackCmd);  
			};
		}
	}

	get handler() {
		return this._handler;
	}
}