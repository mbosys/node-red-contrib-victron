/**
 * This file acts as a whitelist for all the paths that
 * we want to show in node-red nodes.
 *
 * The whitelist is used in the generation of services.json.
 */

module.exports = {
    'Battery Monitor': [
        // "/ProductId",
        // "/FirmwareVersion",
        "/Dc/0/Voltage",
        "/Dc/1/Voltage",
        "/Dc/0/Current",
        "/ConsumedAmphours",
        "/Soc",
        "/TimeToGo",
        "/Relay/0/State",
        // "/History/DeepestDischarge",
        // "/History/LastDischarge",
        // "/History/AverageDischarge",
        // "/History/ChargeCycles",
        // "/History/FullDischarges",
        // "/History/TotalAhDrawn",
        // "/History/MinimumVoltage",
        // "/History/MaximumVoltage",
        // "/History/TimeSinceLastFullCharge",
        // "/History/AutomaticSyncs",
        // "/History/LowVoltageAlarms",
        // "/History/HighVoltageAlarms",
        // "/History/LowStarterVoltageAlarms",
        // "/History/HighStarterVoltageAlarms",
        // "/History/MinimumStarterVoltage",
        // "/History/MaximumStarterVoltage",
        // "/Serial",
        "/Dc/0/Temperature",
        "/Dc/0/MidVoltage", // relevant ?
        "/Dc/0/MidVoltageDeviation", // relevant ?
        "/Alarms/LowVoltage",
        "/Alarms/HighVoltage",
        "/Alarms/LowStarterVoltage",
        "/Alarms/HighStarterVoltage",
        "/Alarms/LowSoc",
        "/Alarms/LowTemperature",
        "/Alarms/HighTemperature",
        "/Alarms/MidVoltage",
        "/Alarms/FuseBlown",
        "/Alarms/HighInternalTemperature",
        "/State",
        "/ErrorCode",
        // "/SystemSwitch",
        // "/Balancing",
        // "/System/NrOfBatteries",
        // "/System/BatteriesParallel",
        // "/System/BatteriesSeries",
        // "/System/NrOfCellsPerBattery",
        // "/System/MinCellVoltage",
        // "/System/MaxCellVoltage",
        // "/Diagnostics/ShutDownsDueError",
        // "/Diagnostics/LastErrors/1/Error",
        // "/Diagnostics/LastErrors/2/Error",
        // "/Diagnostics/LastErrors/3/Error",
        // "/Diagnostics/LastErrors/4/Error",
        // "/Io/AllowToCharge",
        // "/Io/AllowToDischarge",
        // "/Io/ExternalRelay",
        // "/History/MinimumCellVoltage",
        // "/History/MaximumCellVoltage",
        // "/History/DischargedEnergy",
        // "/History/ChargedEnergy",
        "/Soh",
        "/Info/MaxChargeVoltage",
        "/Info/MaxDischargeVoltage",
        "/Info/MaxChargeCurrent",
        "/Info/MaxDischargeCurrent",
        "/Alarms/CellImbalance",
        "/Alarms/HighChargeCurrent",
        "/Alarms/HighDischargeCurrent",
        "/Alarms/InternalFailure",
        "/Alarms/HighChargeTemperature",
        "/Alarms/LowChargeTemperature",
        '/Dc/0/Power' // Missing
    ],

    'Solar Charger': [
        // "/FirmwareVersion",
        "/Dc/0/Voltage",
        "/Dc/0/Current",
        "/Dc/0/Temperature",
        "/Mode",
        "/State",
        "/Pv/V",
        "/Pv/I",
        // "/Equalization/Pending",
        // "/Equalization/TimeRemaining",
        "/Relay/0/State",
        "/Alarms/LowVoltage",
        "/Alarms/HighVoltage",
        // "/History/Daily/0/Yield",
        // "/History/Daily/0/MaxPower",
        // "/History/Daily/1/Yield",
        // "/History/Daily/1/MaxPower",
        "/ErrorCode",
        // "/ProductId",
        // "/Serial",
        "/Load/State",
        "/Load/I",
        "/Yield/User",
        "/Yield/Power", // Total Yield | Missing
        "/Yield/System", // Lifetime Yield | Missing
        "/MPPOperationMode" // Missing
    ],
    'VE.Bus System': [
        '/Ac/ActiveIn/L1/V',
        '/Ac/ActiveIn/L2/V',
        '/Ac/ActiveIn/L3/V',
        '/Ac/ActiveIn/L1/I',
        '/Ac/ActiveIn/L2/I',
        '/Ac/ActiveIn/L3/I',
        '/Ac/ActiveIn/L1/F',
        '/Ac/ActiveIn/L2/F',
        '/Ac/ActiveIn/L3/F',
        '/Ac/ActiveIn/L1/P',
        '/Ac/ActiveIn/L2/P',
        '/Ac/ActiveIn/L3/P',
        '/Ac/In/1/CurrentLimit', // Missing
        '/Ac/In/1/CurrentLimitIsAdjustable',
        '/Ac/In/2/CurrentLimit', // Missing
        '/Ac/In/2/CurrentLimitIsAdjustable',
        '/Ac/Out/L1/V',
        '/Ac/Out/L2/V',
        '/Ac/Out/L3/V',
        '/Ac/Out/L1/I',
        '/Ac/Out/L2/I',
        '/Ac/Out/L3/I',
        '/Ac/Out/L1/F',
        // '/Ac/ActiveIn/CurrentLimit',
        '/Ac/Out/L1/P',
        '/Ac/Out/L2/P',
        '/Ac/Out/L3/P',
        '/Dc/0/Voltage',
        '/Dc/0/Current',
        '/Ac/NumberOfPhases',
        '/Ac/ActiveIn/ActiveInput',
        '/Soc',
        '/State',
        '/VebusError',
        '/Alarms/HighTemperature',
        '/Alarms/LowBattery',
        '/Alarms/Overload',
        '/Mode',
        '/ModeIsAdjustable', // Missing
        // '/FirmwareVersion',
        //'/ProductId',
        //'/ShortIds',
        // '/Hub4/L1/AcPowerSetpoint',
        // '/Hub4/L2/AcPowerSetpoint',
        // '/Hub4/L3/AcPowerSetpoint',
        // '/Hub4/LowSoc',
        // '/Hub4/Sustain',
        // '/Mgmt/Connection',
        '/Energy/AcIn1ToInverter',
        '/Energy/AcIn2ToInverter',
        '/Energy/AcIn1ToAcOut',
        '/Energy/AcIn2ToAcOut',
        '/Energy/InverterToAcIn1',
        '/Energy/InverterToAcIn2',
        '/Energy/AcOutToAcIn1',
        '/Energy/AcOutToAcIn2',
        '/Energy/InverterToAcOut',
        '/Energy/OutToInverter',
    ],
    //'IO Extender': [],
    'Tank': [
        '/Capacity', // Missing
        '/Remaining', // Missing
        '/Level', // Missing
        '/Status', // Missing
        '/Fluid Type', // Missing
        '/Standard' // Missing
    ],
    // 'System overview': [
    //     '/Ac/PvOnOutput/L1/Power',
    //     '/Ac/PvOnGrid/L1/Power',
    //     '/Dc/Pv/Power',
    //     '/Ac/PvOnOutput/L2/Power',
    //     '/Ac/PvOnOutput/L3/Power',
    //     '/Ac/PvOnGrid/L2/Power',
    //     '/Ac/PvOnGrid/L3/Power',
    //     '/Ac/Consumption/L1/Power',
    //     '/Ac/Consumption/L2/Power',
    //     '/Ac/Consumption/L3/Power',
    //     '/Ac/Grid/L1/Power',
    //     '/Ac/Grid/L2/Power',
    //     '/Ac/Grid/L3/Power',
    //     '/Ac/Genset/L1/Power',
    //     '/Ac/Genset/L2/Power',
    //     '/Ac/Genset/L3/Power',
    //     '/Dc/System/Power',
    //     '/Dc/Battery/Voltage',
    //     '/Dc/Battery/Soc',
    //     '/Dc/Battery/ConsumedAmphours',
    //     '/Dc/Battery/TimeToGo',
    //     '/Dc/Battery/Current',
    //     '/Dc/Vebus/Current',
    //     '/Dc/Battery/State',
    //     '/Dc/Battery/Power',
    //     '/Dc/Vebus/Power',
    //     '/Dc/Battery/Alarms/CircuitBreakerTripped',
    //     '/Ac/ActiveIn/Source',
    // ],
    'PV Inverter': [
        // '/ProductId',
        // '/FirmwareVersion',
        // '/Position',
        '/Ac/L1/Voltage',
        '/Ac/L1/Current',
        '/Ac/L1/Power',
        '/Ac/L1/Energy/Forward',
        '/Ac/L2/Voltage',
        '/Ac/L2/Current',
        '/Ac/L2/Power',
        '/Ac/L2/Energy/Forward',
        '/Ac/L3/Voltage',
        '/Ac/L3/Current',
        '/Ac/L3/Power',
        '/Ac/L3/Energy/Forward',
        '/StatusCode',
        '/ErrorCode',
        // '/Serial',
        // '/FroniusDeviceType',
        '/Ac/Energy/Forward', // Missing
        '/Ac/Power', // Missing,
    ],
    // 'BMS': [
    //     '/ProductId',
    //     '/FirmwareVersion',
    // ],
    // 'Motor drive': [
    //     '/Motor/RPM',
    //     '/Motor/Temperature',
    //     '/Dc/0/Voltage',
    //     '/Dc/0/Current',
    //     '/Dc/0/Power',
    //     '/Controller/Temperature',
    // ],
    'Charger': [ // AC Charger Node
        // '/ProductId',
        // '/FirmwareVersion',
        // '/Serial',
        '/Dc/0/Voltage',
        '/Dc/0/Current',
        '/Dc/0/Temperature',
        '/Dc/1/Voltage',
        '/Dc/1/Current',
        '/Dc/1/Temperature', // Missing
        '/Dc/2/Voltage',
        '/Dc/2/Current',
        '/Dc/2/Temperature', // Missing
        '/Ac/In/L1/I',
        '/Ac/In/L1/P',
        '/Ac/In/CurrentLimit',
        '/Mode',
        '/State',
        '/ErrorCode',
        '/Relay/0/State',
        '/Alarms/LowVoltage',
        '/Alarms/HighVoltage',
        '/NrOfOutputs' // Missing
    ],
    // 'ZBM Node': [
    //     '/Alarms/AirTemperatureSensor',
    //     '/Alarms/BatteryTemperatureSensor',
    //     '/Alarms/BromidePump',
    //     '/Alarms/ElectricBoard',
    //     '/Alarms/HighTemperature',
    //     '/Alarms/HighVoltage',
    //     '/Alarms/InternalFailure',
    //     '/Alarms/Leak1Trip',
    //     '/Alarms/Leak2Trip',
    //     '/Alarms/LeakSensors',
    //     '/Alarms/OverCurrent',
    //     '/Alarms/StateOfHealth',
    //     '/Alarms/Unknown',
    //     '/Alarms/ZincPump',
    //     '/ProductId',
    //     '/FirmwareVersion',
    // ],
    // 'Heating': [],
    'Grid meter': [
        // '/ProductId',
        "/Ac/Energy/Forward", // Missing
        "/Ac/Energy/Reverse", // Missing
        "/Ac/Power", // Missing
        "/Ac/Current",
        "/Ac/Voltage",
        "/Ac/L1/Current", // Missing
        "/Ac/L1/Energy/Forward", // Missing
        "/Ac/L1/Energy/Reverse", // Missing
        "/Ac/L1/Power", // Missing
        "/Ac/L1/Voltage", // Missing
        "/Ac/L2/Current", // Missing
        "/Ac/L2/Energy/Forward", // Missing
        "/Ac/L2/Energy/Reverse", // Missing
        "/Ac/L2/Power", // Missing
        "/Ac/L2/Voltage", // Missing
        "/Ac/L3/Current", // Missing
        "/Ac/L3/Energy/Forward", // Missing
        "/Ac/L3/Energy/Reverse", // Missing
        "/Ac/L3/Power", // Missing
        "/Ac/L3/Voltage", // Missing
        "/DeviceType", // Missing
        "/ErrorCode" // Missing
    ],
    'Inverter': [ // VE.Direct Inverter Node
        // '/ProductId',
        // '/Serial',
        '/Dc/0/Voltage', // Missing
        '/Ac/Out/L1/V', // Missing
        '/Ac/Out/L1/I', // Missing
        '/Mode', // Missing
        '/State' // Missing
    ],
    // 'Generator': [
    //     '/ProductId',
    // ],
    // 'Generator start/stop': [],
    // 'Gas meter': [],
    'Pulse meter': [ // Digital Input Node
        // '/ProductId',
        '/Aggregate',
        '/Count',
        // '/Connected' // Missing
    ],
    'Digital input': [ // Digital Input Node
        '/ProductId',
        '/Alarm',
        '/State',
        '/Count',
        '/Type',
        // '/Connected' //Missing
    ],
    'Temperature sensor': [
        '/Temperature', // Missing
        '/Status', // Missing
        '/TemperatureType', // Missing
    ],
}