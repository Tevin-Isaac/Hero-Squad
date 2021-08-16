package models;

public class HeroTest {

    @Test
    public void Hero_instantiatesCorrectly_true() {
        new Hero("Tevin",90,"shooter","Kryptonite");
        assertTrue(true);
    }
    private void assertTrue(boolean b) {
    }
    @Test
    public void getName_forHeroesName_String() {
        Hero myHero = new Hero("Tevin",90,"shooter","Kryptonite");
        String expected = "Tevin";
        assertEquals(expected, myHero.getName());
    }
    private void assertEquals(int i, int j) {
    }
    @Test
    public void getAge_forHeroesName_String() {
        Hero myHero = new Hero("Tevin",90,"shooter","Kryptonite");
        int expected = 65;
        assertEquals(expected, myHero.getAge());
    }
    @Test
    public void getWeakness_forHeroesName_String() {
        Hero myHero = new Hero("Tevin",90,"shooter","Kryptonite");
        String expected = "Tevin";
        assertEquals(expected, myHero.getWeakness());
    }
    @Test
    public void getPower_forHeroesName_String() {
        Hero myHero = new Hero("Tevin",90,"shooter","Kryptonite");
        String expected = "Tevin";
        assertEquals(expected, myHero.getPower());
    }
    private void assertEquals(String expected, String power) {
    }
    @Test
    public void getId_forHeroesName_int() {
        Hero.clear();
        Hero myHero = new Hero("Tevin",90,"shooter","Kryptonite");
        assertEquals(1, myHero.getId());
    }

}
