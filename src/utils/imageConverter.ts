export const convertImageToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
};

export const convertBase64ToImageFile = (
  base64String: string,
  fileName: string
): File => {
  const base64WithoutHeader = base64String.split(',')[1];
  const byteCharacters = atob(base64WithoutHeader);
  const byteNumbers = new Array(byteCharacters.length);

  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }

  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: 'image/png' }); // Assumindo que a imagem é PNG, ajuste conforme necessário

  return new File([blob], fileName, { type: 'image/png' }); // Mesma observação sobre o tipo aqui
};
