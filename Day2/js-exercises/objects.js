// Objects module

export const profile = {
  name: 'Tejas Hinde',
  role: 'Full Stack Developer',
  skills: ['Java', 'Spring Boot', 'React', 'CSS', 'HTML'],
};

// Function to return formatted profile string
export function showProfile(obj) {
  return `${obj.name} is a ${obj.role}. Skills: ${obj.skills.join(', ')}.`;
}
