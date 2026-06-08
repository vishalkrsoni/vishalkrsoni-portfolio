const iconMap = {
  angular: "angular.svg",
  aws: "aws.svg",
  bootstrap: "bootstrap.svg",
  "ci-cd": "cicd.svg",
  css: "css.svg",
  docker: "docker.svg",
  fastapi: "fastapi.svg",
  firebase: "firebase.svg",
  gcp: "gcp.svg",
  git: "git.svg",
  graphql: "graphql.svg",
  html: "html.svg",
  java: "java.svg",
  javascript: "javascript.svg",
  kafka: "kafka.svg",
  materialui: "materialui.svg",
  mongodb: "mongoDB.svg",
  mysql: "mysql.svg",
  "node js": "nodeJs.svg",
  postgresql: "postgresql.svg",
  python: "python.svg",
  "react js": "react.svg",
  redis: "redis.svg",
  springboot: "springBoot.svg",
  storybook: "storybook.svg",
  swagger: "swagger.svg",
  tailwind: "tailwind.svg",
  typescript: "typescript.svg",
  "vite js": "vitejs.svg",
};

export function getSkillIcon(skill) {
  const filename = iconMap[skill.toLowerCase()];
  return filename ? `/skills/${filename}` : null;
}
