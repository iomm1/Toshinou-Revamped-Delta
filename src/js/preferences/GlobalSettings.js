class GlobalSettings {
	constructor() {
		let self = this;
		chrome.storage.local.get({
			headerColor: "#191919",
			headerOpacity: "0.9",
			windowColor: "#191919",
			windowOpacity: "0.8",
			timerTick: 300,
			debug: false,
			enableRefresh: false,
			refreshToReconnect: false,
			refreshTime: 60,
			speedFormat: 'hour',
			windowsToTabs: false,
			autoChangeConfig: false,
			attackConfig: 1,
			flyingConfig: 1,
			escapeConfig: 1,
			reviveType: 1,
			reviveLimit: 5,
			bonusBox: false,
			materials: false,
			cargoBox: false,
			greenOrGoldBooty: false,
			redBooty: false,
			blueBooty: false,
			masqueBooty: false,
			collectBoxWhenCircle: false,
			workmap: 0,
			changeFormation: false,
			attackFormation: -2,
			flyingFormation: -2,
			escapeFormation: -2,
			useHability: false,
			habilitySlot: -1,
			habilitySlotTwo: -1,
			habilitySlotThree: -1,
			habilitySlotFour: -1,
			npcList: null,
			changeAmmunition: false,
			x1Slot: -1,
			x2Slot: -1,
			x3Slot: -1,
			x4Slot: -1,
			sabSlot: -1,
			rsbSlot: -1,
			stopafterxminutes: 0,
			waitafterRepair: 0,
			waitBeforeRepair: 8,
			fleeFromEnemy: false,
			jumpFromEnemy: false,
			onlyEscapeWhenEnemyAttack: false,
			dodgeTheCbs: false,
			moveRandomly: false,
			killNpcs: false,
			avoidAttackedNpcs: false,
			circleNpc: false,
			dontCircleWhenHpBelow25Percent: false,
			autoPlay: 0,
			respondPlayerAttacks: false,
			playerAmmo: 0,
			useCBSZoneSegure: false,
			randomBreaks: false,
			stopWhenCargoIsFull: false,
			repairWhenHpIsLowerThanPercent: 10,
			sentinelid: 0,
			defendSentinel: false,
			alpha: false,
			beta: false,
			gamma: false,
			delta: false,
			epsilon: false,
			zeta: false,
			kappa: false,
			lambda: false,
			kronos: false,
			hades: false,
			kuiper: false,
		}, items => {
			self._settings = items;
		});
	}

	get habilitySlot(){
		return this._settings.habilitySlot;
	}

	get habilitySlotTwo(){
		return this._settings.habilitySlotTwo;
	}

	get habilitySlotThree(){
		return this._settings.habilitySlotThree;
	}

	get habilitySlotFour(){
		return this._settings.habilitySlotFour;
	}

	get useHability(){
		return this._settings.useHability;
	}

	get changeFormation(){
		return this._settings.changeFormation;
	}

	get attackFormation(){
		return this._settings.attackFormation;
	}

	get flyingFormation(){
		return this._settings.flyingFormation;
	}

	get escapeFormation(){
		return this._settings.escapeFormation;
	}

	get headerColor() {
		return this._settings.headerColor;
	}

	get headerOpacity() {
		return this._settings.headerOpacity;
	}

	get windowColor() {
		return this._settings.windowColor;
	}

	get windowOpacity() {
		return this._settings.windowOpacity;
	}

	get timerTick() {
		return this._settings.timerTick;
	}

	get debug() {
		return this._settings.debug;
	}

	get speedFormat() {
		return this._settings.speedFormat;
	}

	get enableRefresh() {
		return this._settings.enableRefresh;
	}

	get refreshToReconnect(){
		return this._settings.refreshToReconnect;
	}

	get refreshTime() {
		return this._settings.refreshTime;
	}

	get windowsToTabs() {
		return this._settings.windowsToTabs;
	}

	get autoChangeConfig() {
		return this._settings.autoChangeConfig;
	}

	get attackConfig() {
		return this._settings.attackConfig;
	}

	get flyingConfig() {
		return this._settings.flyingConfig;
	}

	get escapeConfig() {
		return this._settings.escapeConfig;
	}

	get reviveType() {
		return this._settings.reviveType;
	}

	get reviveLimit() {
		return this._settings.reviveLimit;
	}

	get fleeFromEnemy() {
		return this._settings.fleeFromEnemy;
	}

	get jumpFromEnemy() {
		return this._settings.jumpFromEnemy;
	}

	get onlyEscapeWhenEnemyAttack() {
		return this._settings.onlyEscapeWhenEnemyAttack;
	}

	get dodgeTheCbs() {
		return this._settings.dodgeTheCbs;
	}

	get moveRandomly() {
		return this._settings.moveRandomly;
	}

	get killNpcs() {
		return this._settings.killNpcs;
	}

	get avoidAttackedNpcs() {
		return this._settings.avoidAttackedNpcs;
	}

	get circleNpc() {
		return this._settings.circleNpc;
	}

	get dontCircleWhenHpBelow25Percent() {
		return this._settings.dontCircleWhenHpBelow25Percent;
	}

	get autoPlay() {
		return this._settings.autoPlay;
	}

	get respondPlayerAttacks() {
		return this._settings.respondPlayerAttacks;
	}

	get playerAmmo() {
		return this._settings.playerAmmo;
	}

	get useCBSZoneSegure() {
		return this._settings.useCBSZoneSegure;
	}

	get randomBreaks() {
		return this._settings.randomBreaks;
	}
	
	get stopWhenCargoIsFull() {
		return this._settings.stopWhenCargoIsFull;
	}
	
	get repairWhenHpIsLowerThanPercent() {
		return this._settings.repairWhenHpIsLowerThanPercent;
	}
	
	get bonusBox() {
		return this._settings.bonusBox;
	}

	get materials() {
		return this._settings.materials;
	}

	get cargoBox() {
		return this._settings.cargoBox;
	}

	get greenOrGoldBooty() {
		return this._settings.greenOrGoldBooty;
	}

	get redBooty() {
		return this._settings.redBooty;
	}

	get blueBooty() {
		return this._settings.blueBooty;
	}

	get masqueBooty() {
		return this._settings.masqueBooty;
	}

	get collectBoxWhenCircle() {
		return this._settings.collectBoxWhenCircle;
	}

	get workmap() {
		return this._settings.workmap;
	}

	get npcList() {
		return this._settings.npcList;
	}

	get changeAmmunition() {
		return this._settings.changeAmmunition;
	}

	get x1Slot() {
		return this._settings.x1Slot;
	}

	get x2Slot() {
		return this._settings.x2Slot;
	}

	get x3Slot() {
		return this._settings.x3Slot;
	}

	get x4Slot() {
		return this._settings.x4Slot;
	}

	get sabSlot() {
		return this._settings.sabSlot;
	}

	get rsbSlot() {
		return this._settings.rsbSlot;
	}

	get stopafterxminutes() {
		return this._settings.stopafterxminutes;
	}

	get waitafterRepair() {
		return this._settings.waitafterRepair;
	}

	get waitBeforeRepair() {
		return this._settings.waitBeforeRepair;
	}

	get sentinelid() {
		return this._settings.sentinelid;
	}

	get defendSentinel() {
		return this._settings.defendSentinel;
	}

	get alpha() {
		return this._settings.alpha;
	}

	get beta() {
		return this._settings.beta;
	}

	get gamma() {
		return this._settings.gamma;
	}

	get delta() {
		return this._settings.delta;
	}

	get epsilon() {
		return this._settings.epsilon;
	}

	get zeta() {
		return this._settings.zeta;
	}

	get kappa() {
		return this._settings.kappa;
	}

	get lambda() {
		return this._settings.lambda;
	}

	get kronos() {
		return this._settings.kronos;
	}

	get hades() {
		return this._settings.hades;
	}

	get kuiper() {
		return this._settings.kuiper;
	}

}