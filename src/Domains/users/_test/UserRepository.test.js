const UserRepository = require('../UserRepository');

describe('UserRepository interfaces', () => {
  it('should throw error when invoke abstract behaviour', async () => {
    // Arrange
    const userRepository = new UserRepository();

    // Action
    await expect(userRepository.addUser({})).rejects.toThrowError('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
    await expect(userRepository.verifyAvailableUsername('')).rejects.toThrowError('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED');
  });
});
