import 'dotenv/config';

export const getEnvVar = (envVarName, defaultValue) => {
  const envVar = process.env[envVarName];

  if (!envVar && defaultValue) {
    return defaultValue;
  }
  if (!envVar) {
    throw new Error(`EnvVar with name ${envVarName} not exist!`);
  }
  return envVar;
};
